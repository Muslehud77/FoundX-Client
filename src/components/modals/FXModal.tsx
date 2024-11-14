"use client";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { useEffect, useRef } from "react";

type FXModalProps = {
  buttonText?: string;
  title: string;
  children: React.ReactNode;
  buttonVariant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined;
  buttonClassName?: string;
  closeModal?: boolean;
  isIcon?: boolean;
  iconElement?: React.ReactNode
};

export default function FXModal({
  buttonText,
  title,
  children,
  buttonVariant = "light",
  buttonClassName,
  closeModal,
  isIcon = false,
  iconElement
}: FXModalProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (closeModal) {
      onClose();
    }

    if (ref.current) {
      console.log(ref)
    }


  }, [closeModal, isOpen]);

 


  return (
    <>
      {!isIcon ? (
        <Button
          className={buttonClassName}
          variant={buttonVariant}
          onPress={onOpen}
        >
          {buttonText}
        </Button>
      ) : (
        <Button
          className={buttonClassName}
          variant={buttonVariant}
          onPress={onOpen}
          isIconOnly={true}
        >
          {iconElement}
        </Button>
      )}

      <Modal
      ref={ref}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
