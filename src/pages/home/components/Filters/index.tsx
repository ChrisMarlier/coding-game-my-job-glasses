import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { InputText, Text } from "../../../../designSystem";
import { FiltersContainer, FormContainer } from "./styles";

const Filters = () => {
  const [text, setText] = useState("");

  const { control, handleSubmit } = useForm<any>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FiltersContainer>
      <Text mt={50} size="1.4rem" bold>
        Characters
      </Text>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <InputText field={field} value={text} onChange={setText} />
            )}
          />
        </form>
      </FormContainer>
    </FiltersContainer>
  );
};

export default Filters;
