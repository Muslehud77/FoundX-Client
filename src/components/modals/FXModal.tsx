import { Button } from "@nextui-org/button";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";


type FXModalProps = {
    buttonText : string;
    title : string;
    children: React.ReactNode;
    buttonVariant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost" | undefined;
    buttonClassName: string
}


export default function FXModal({buttonText,title,children,buttonVariant="light",buttonClassName}: FXModalProps) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button className={buttonClassName} variant={buttonVariant} onPress={onOpen}>{buttonText}</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                {children}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>      
      </Modal>
    </>
  );
}