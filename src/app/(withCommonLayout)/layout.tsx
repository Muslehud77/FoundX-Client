import { Navbar } from "@/src/components/UI/navbar";
import { ReactNode } from "react";

type layoutProps = {
  children: ReactNode;
};

const layout = ({ children }: layoutProps) => {
  return (
    <div>
      <div className="relative flex flex-col h-screen">
        <Navbar />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default layout;
