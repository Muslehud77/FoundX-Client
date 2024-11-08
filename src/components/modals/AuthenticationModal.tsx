import Link from "next/link";
import FXModal from "./FXModal";
import { Button } from "@nextui-org/button";

type AuthenticationModalProps = {
  _id: string;
};

const AuthenticationModal = ({ _id }: AuthenticationModalProps) => {
  return (
    <FXModal
      title="Authentication"
      buttonText="Claim Item"
      buttonClassName="flex-1"
    >
      <div>
        You are not currently logged in. Please login first to continue.
      </div>
      <div className="mb-4 mt-2 flex gap-2">
        <Link className="flex-1" href={`/register?redirect=found-items/${_id}`}>
          <Button className="w-full">Register</Button>
        </Link>
        <Link className="flex-1" href={`/login?redirect=found-items/${_id}`}>
          <Button className="w-full">Login</Button>
        </Link>
      </div>
    </FXModal>
  );
};

export default AuthenticationModal;
