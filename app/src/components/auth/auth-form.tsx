import { Form } from "@/components/ui/form";
import React from "react";
const AuthForm = ({
  children,
  form,
}: {
  children: React.ReactNode;
  form: any;
}) => {
  return (
    <div className="flex flex-col items-start justify-center mx-auto shadow-inner dark:shadow-neutral-600 shadow-neutral-300 p-4 md:rounded-xl sm:rounded-lg gap-3 dark:bg-slate-950 max-w-sm w-full">
      <div className="flex flex-col items-center justify-center w-full my-4">
        <h1 className="font-bold text-xl">
          Welcome Back to <span className="text-sky-600">WriteUp</span>
        </h1>
        <p className="text-sm text-neutral-500">
          Login to your account and start writing
        </p>
      </div>
      <Form {...form}>{children}</Form>
    </div>
  );
};

export default AuthForm;
