import Link from "next/link";
import FXModal from "./FXModal";
import { Button } from "@nextui-org/button";
import { TAnswer } from "@/src/types";
import { Eye } from "lucide-react";
import { useState } from "react";

type AcceptClaimRequestModalProps = {
  _id: string;
  claimedAnswers: TAnswer[];
};

const AcceptClaimRequestModal = ({
  _id,
  claimedAnswers,
}: AcceptClaimRequestModalProps) => {

    const [closeModal, setCloseModal] = useState(false);

  return (
    <FXModal closeModal={closeModal} title="Claim request" isIcon={true} iconElement={<Eye />}>
      <div>
        <p>
          A user has claimed this item. Please review their answers to the
          questions below.
        </p>
      </div>

      {/* Questions and Answers */}
      <div className="my-4">
        {claimedAnswers.map((answer, index) => (
          <div key={index} className="mb-4 p-4 border-b border-gray-200">
            <p className="font-semibold">Question: {answer.question}</p>
            <p>Answer: {answer.answer}</p>
          </div>
        ))}
      </div>

     

      <div className="flex gap-2 mt-4">
        <Button className="flex-1">
          Accept Claim
        </Button>
        <Button onClick={()=> setCloseModal(true)}  className="flex-1">
          Decline Claim
        </Button>
      </div>
    </FXModal>
  );
};

export default AcceptClaimRequestModal;
