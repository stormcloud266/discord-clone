import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return <div className="bg-stone-600 h-full">{children}</div>;
};

export default AuthLayout;
