import { Controller, useForm } from "react-hook-form";
import { Dropdown, InputText, Text } from "../../../../designSystem";
import { FiltersContainer, FormContainer } from "./styles";

const Filters = ({ loadNewData }: { loadNewData: Function }) => {
  const { control, handleSubmit } = useForm<FormFilters>();

  const onSubmit = (data: FormFilters) => {
    loadNewData(data);
  };

  const statusOption = [
    { value: "alive", label: "Alive" },
    { value: "dead", label: "Dead" },
    { value: "unknown", label: "Unknown" },
  ];

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
            render={({ field }) => <InputText field={field} text="Name" />}
          />

          <Controller
            name="status"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <Dropdown field={field} options={statusOption} text="Status" />
            )}
          />
          <button type="submit">Submit</button>
        </form>
      </FormContainer>
    </FiltersContainer>
  );
};

export default Filters;
