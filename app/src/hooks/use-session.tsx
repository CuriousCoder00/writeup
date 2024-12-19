import { useRecoilState } from "recoil";
import { sessionState } from "@/lib/store/atoms";
import { useEffect } from "react";

export const useSession = () => {
  const [session, setSession] = useRecoilState(sessionState);
  useEffect(() => {
    const token = localStorage.getItem("writeup_token");
    const user = localStorage.getItem("writeup_user");
    if (token && user) {
      setSession({ user: JSON.parse(user), token });
    }
  }, [setSession]);

  return { session };
};
