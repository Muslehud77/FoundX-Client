"use client";

import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { AddIcon, TrashIcon } from "@/src/assets/icons";
import {
  FormProvider,
  useFieldArray,
  useForm,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import FXDatePicker from "@/src/components/form/FXDatePicker";
import dateToISO from "@/src/utils/dateToISO";
import FXSelect from "@/src/components/form/FXSelect";
import {allDistict as allDistrict} from "@bangladeshi/bangladesh-address"
import { useGetCategories } from "@/src/hooks/categories.hook";
import { TCategory } from "@/src/types";


const cityOptions = allDistrict().sort().map((city:string)=> ({
  key:city, label:city
}))




const page = () => {

   const {data,isLoading} = useGetCategories()

   const categoryOptions = data?.data?.map((item: TCategory) => ({
     key: item._id,
     label: item.name,
   })) || [];

   console.log(categoryOptions);

  const methods = useForm();

  const { control, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,
      questions: data.questions.map((que: { value: string }) => que.value),
      dateFound: dateToISO(data.dateFound),
    };
    console.log(postData);
  };

  const handleAppend = () => {
    append({
      name: "questions",
      value: "",
    });
  };


  console.log();

  

  return (
    <div className="h-full rounded-xl bg-gradient-to-b from-default-100 px-[73px] py-12">
      <h1 className="text-2xl font-semibold">Post a found item</h1>
      <Divider className="mb-5 mt-3" />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FXInput label="Title" name="title" />
            </div>
            <div className="min-w-fit flex-1">
              <FXDatePicker name="dateFound" label="Found date" />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FXInput label="Location" name="location" />
            </div>
            <div className="min-w-fit flex-1">
              <FXSelect label="City" options={cityOptions} name="city" />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FXSelect
                isLoading={isLoading}
                label="Category"
                options={categoryOptions}
                name="category"
              />
            </div>
            <div className="min-w-fit flex-1">
              <label
                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
                htmlFor="image"
              >
                Upload image
              </label>
              <input
                id="image"
                type="file"
                multiple
                className="hidden"
                accept="image/*"
              />
            </div>
          </div>

          <div className="flex flex-wrap-reverse gap-2 py-2">
            <div className="min-w-fit flex-1"></div>
          </div>

          <Divider className="my-5" />

          <div className="flex justify-between items-center mb-5">
            <h1 className="text-xl">Owner verification questions</h1>
            <Button isIconOnly onClick={() => handleAppend()}>
              <AddIcon />
            </Button>
          </div>

          <div className="space-y-5">
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-2 items-center">
                <FXInput label="Question" name={`questions.${index}.value`} />
                <Button
                  isIconOnly
                  className="h-14 w-16"
                  onClick={() => remove(index)}
                >
                  {" "}
                  <TrashIcon />
                </Button>
              </div>
            ))}
          </div>

          <Divider className="my-5" />
          <div className="flex justify-end">
            <Button size="lg" type="submit">
              Post
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default page;
