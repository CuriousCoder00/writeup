import {
  userLoginSchema,
  UserLoginInput,
} from "@/lib/validations/user.validator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthForm from "./auth-form";
import { AuthInput } from "./auth-input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useState } from "react";
import { Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const form = useForm<UserLoginInput>({
    resolver: zodResolver(userLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const login = async (data: UserLoginInput) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      toast({
        title: result.message,
        variant: response.ok ? "default" : "destructive",
      });
    } catch (error) {
      toast({
        title: (error as Error).message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthForm form={form}>
      <form
        className="flex flex-col w-full gap-4 my-4"
        onSubmit={form.handleSubmit(login)}
      >
        <AuthInput
          form={form}
          label="Email Address"
          name="email"
          disabled={loading}
          placeholder="john.doe@gmail.com"
        />
        <AuthInput
          form={form}
          label="Password"
          name="password"
          disabled={loading}
          placeholder="******"
          type="password"
        />
        <p className="text-xs text-end">
          <Link to="/auth/register" className="text-sky-600">
            Forgot Password?
          </Link>
        </p>
        <Button disabled={loading} type="submit" className="w-full">
          {loading ? <Loader className="animate-spin" /> : "Login"}
        </Button>
        <div>
          <p className="text-sm text-end">
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-sky-600">
              Register
            </Link>
          </p>
        </div>
      </form>
    </AuthForm>
  );
};

export default LoginForm;
