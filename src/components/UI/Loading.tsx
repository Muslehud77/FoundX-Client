import { Spinner } from "@nextui-org/spinner";

type LoadingProps = {
  isPending: boolean;
};

const Loading = ({ isPending }: LoadingProps) => {
  return (
    <>
      {isPending && (
        <div className="bg-black/10 backdrop-blur-md h-screen fixed inset-0 z-[999] flex justify-center items-center">
          <Spinner size="lg" color="white" />
        </div>
      )}
    </>
  );
};

export default Loading;
