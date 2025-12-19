import { useEffect } from "react";

export default function ProtectedRoute({ children, onRequireLogin }) {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      onRequireLogin();
    }
  }, [token, onRequireLogin]);

  if (!token) return null;

  return children;
}
