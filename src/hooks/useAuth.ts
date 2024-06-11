import { useSelector } from "react-redux";

function useAuth() {
  const { isLoggedIn, token } = useSelector((state: any) => state.login) || {};

  if (isLoggedIn && token?.token) {
    return true;
  } else {
    return false;
  }
}

export default useAuth;
