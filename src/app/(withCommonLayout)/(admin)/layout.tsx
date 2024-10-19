import { ReactNode } from "react";

type layoutProps = {
  children: ReactNode;
};

const layout = ({ children }: layoutProps) => {
  return (
    <>
      <h1>This is admin layout</h1>
      {children}
    </>
  );
};

export default layout;
