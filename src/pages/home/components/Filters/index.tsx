import { Controller, useForm } from "react-hook-form";
import { Button, Dropdown, InputText, Text } from "../../../../designSystem";
import { DropdownContainer, FiltersContainer, FormContainer } from "./styles";
import formatDropdownOptions from "../../../../helpers/formatDropdownOptions";

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

  return (
    <div style={{ paddingTop: "0px", width: "100%", backgroundColor: "white" }}>
      <FiltersContainer>
        <Text mt={20} size="1.7rem" bold>
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
                    options={formatDropdownOptions(status)}
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
                    options={formatDropdownOptions(species)}
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
                    options={formatDropdownOptions(genders)}
                    text="Gender"
                  />
                )}
              />
            </DropdownContainer>
            <Button color="lightBlue" size="large" margin="20px" type="submit">
              Search
            </Button>
          </form>
        </FormContainer>
      </FiltersContainer>
    </div>
  );
};

export default Filters;
