import FXModal from "./FXModal";

type AuthenticationModalProps = {
  _id: string;
};

const AuthenticationModal = ({ _id }: AuthenticationModalProps) => {
  return (
    <FXModal buttonClassName="flex-1" buttonText="" title="">
      <h1>Authentication Modal</h1>
    </FXModal>
  );
};

export default AuthenticationModal;
