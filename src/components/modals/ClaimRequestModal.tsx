import FXModal from "./FXModal";

type ClaimRequestModalProps = {
  questions?:string[];
  _id:string;
};

const ClaimRequestModal = ({questions,_id}:ClaimRequestModalProps) => {
  return (
   <FXModal buttonClassName="flex-1" buttonText="Claim Request" title="Claim Request">
        <h1>Claim Request Modal</h1>
   </FXModal>
  );
};

export default ClaimRequestModal;