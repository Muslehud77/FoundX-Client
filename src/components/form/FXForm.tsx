import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, unknown>;
  resolver?: any;
};

type FXFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  defaultValues?: Record<string, unknown>;
  resolver?: any;
};

const FXForm = ({
  children,
  onSubmit,
  defaultValues,
  resolver,
}: FXFormProps) => {
  const formConfig: TFormConfig = {};

  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FXForm;
