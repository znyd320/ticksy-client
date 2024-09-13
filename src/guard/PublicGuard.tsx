import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../pages/loader/Loader";
import { UrlDashboard } from "../router/url";

function PublicGuard() {
  const isLoggedIn = useAuth();
  // const isLoggedIn = true;
  console.log("isLoggedIn", isLoggedIn);

  return !isLoggedIn ? (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to={UrlDashboard()} />
  );
}

export default PublicGuard;
