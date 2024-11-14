import { FieldValues, SubmitHandler } from "react-hook-form";
import FXModal from "./FXModal";
import FXForm from "../form/FXForm";
import FXInput from "../form/FXInput";
import FXTextArea from "../form/FXTextArea";
import { Button } from "@nextui-org/button";
import { useClaimRequest } from "@/src/hooks/claimRequest.hook";
import { useState } from "react";

type ClaimRequestModalProps = {
  questions: string[];
  _id: string;
};

const ClaimRequestModal = ({ questions, _id }: ClaimRequestModalProps) => {
   
    const { mutate: handleClaimRequest, isPending,isSuccess } = useClaimRequest();
    const handleSubmit: SubmitHandler<FieldValues> = (data) => {
     const claimRequestData = {
       item: _id,
       description: data.description,
       answers: Object.keys(data)
         .filter((formElement) => formElement.startsWith("answer"))
         .map((answer) => data[answer]),
     };

     handleClaimRequest(claimRequestData);
  };

 

  return (
    <FXModal
        closeModal={isSuccess}
      buttonClassName="flex-1"
      buttonText="Claim Request"
      title="Claim Request"
    >
      <FXForm onSubmit={handleSubmit}>
        {questions?.map((question, index) => (
          <div className="mb-4" key={index}>
            <p className="mb-1">{question}</p>
            <FXInput
              label={`Answer - ${index + 1}`}
              name={`answer-${index + 1}`}
            />
          </div>
        ))}

        <FXTextArea label="Description" name="description" />

        <div>
          <Button className="w-full flex-1 my-2" size="lg" type="submit">
            {isPending ? "Sending...." : "Send"}
          </Button>
        </div>
      </FXForm>
    </FXModal>
  );
};

export default ClaimRequestModal;
