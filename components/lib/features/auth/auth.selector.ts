// useAuth.ts
import { useSelector } from "react-redux";
import { RootState } from "../../../../components/lib/store";

const isAuthenticated = () => {
  return useSelector((state: RootState) => state.auth.isAuthenticated);
};

const getCurrentUser = () => {
  return useSelector((state: RootState) => state.auth.user);
};

export { isAuthenticated, getCurrentUser };
