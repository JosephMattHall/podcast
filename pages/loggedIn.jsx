import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/auth/AuthUserContext";

const LoggedIn = () => {
  const { authUser, loading } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) router.push("/");
  }, [authUser, loading]);

  return <h1>logged in</h1>;
};

export default LoggedIn;
