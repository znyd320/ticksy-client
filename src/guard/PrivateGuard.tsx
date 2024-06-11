import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../pages/loader/Loader";

function PrivateGuard() {
  const isLoggedIn = useAuth();

  return isLoggedIn ? (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to="/" />
  );
}

export default PrivateGuard;
