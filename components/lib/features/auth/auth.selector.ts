// useAuth.ts
import { useSelector } from "react-redux";
import { RootState } from "../../../../components/lib/store";

const IsAuthenticated = () => {
  return useSelector((state: RootState) => state.auth.isAuthenticated);
};

const GetCurrentUser = () => {
  return useSelector((state: RootState) => state.auth.user);
};


export { IsAuthenticated, GetCurrentUser };
