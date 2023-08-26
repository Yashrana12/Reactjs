import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userAuth } from "./Auth";

export default function ProtectedRoute({ component }) {
  let { user } = userAuth();
  let navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });
  return <>{component}</>;
}
