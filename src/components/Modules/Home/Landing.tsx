import { Input } from "@nextui-org/input";

import { SearchIcon } from "../../UI/icons";

const Landing = () => {
  return (
    <div className="h-[calc(100vh-64px)] bg- bg-no-repeat bg-cover bg-center w-full bg-[url('/banner.webp')] flex items-center justify-center">
      <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Input
          area-label="Search"
          placeholder="Search..."
          classNames={{
            inputWrapper: "bg-default-100",
            input: "text-sm",
          }}
          size="lg"
          startContent={<SearchIcon className="text-xl mr-2" />}
          type="text"
        />
      </form>
    </div>
  );
};

export default Landing;
