import { Controller, useForm } from "react-hook-form";
import { Button, Dropdown, InputText, Text } from "../../../../designSystem";
import { DropdownContainer, FiltersContainer, FormContainer } from "./styles";

const Filters = ({ loadNewData }: { loadNewData: Function }) => {
  const { control, handleSubmit } = useForm<FormFilters>();

  const onSubmit = (data: FormFilters) => {
    loadNewData(data);
  };

  const status = ["Alive", "Dead", "Unknown"];

  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  let genders = ["Female", "Male", "Genderless", "Unknown"];

  function formatOptions(options: string[]) {
    return options.map((option) => {
      return { value: option, label: option };
    });
  }

  return (
    <FiltersContainer>
      <Text mt={50} size="1.7rem" bold>
        Filter characters
      </Text>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <InputText field={field} text="Name" />}
          />
          <DropdownContainer>
            <Controller
              name="status"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <Dropdown
                  field={field}
                  options={formatOptions(status)}
                  text="Status"
                />
              )}
            />
            <Controller
              name="specie"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <Dropdown
                  field={field}
                  options={formatOptions(species)}
                  text="Species"
                />
              )}
            />
            <Controller
              name="gender"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <Dropdown
                  field={field}
                  options={formatOptions(genders)}
                  text="Gender"
                />
              )}
            />
          </DropdownContainer>
          <Button color="lightBlue" size="medium" margin="20px" type="submit">
            Search
          </Button>
        </form>
      </FormContainer>
    </FiltersContainer>
  );
};

export default Filters;
