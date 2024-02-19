type FormFilters = {
  name: string;
  status: {
    value: null | "alive" | "dead" | "unknown";
    label: string;
  } | null;
  specie: {
    value: string;
    label: string;
  } | null;
  gender: {
    value: Genders;
    label: string;
  } | null;
};

type Filters = {
  name?: string;
  status?: null | "alive" | "dead" | "unknown";
  gender?: Genders | null;
  species?: string | null;
  type?: string;
};

type Genders = "female" | "male" | "genderless" | "unknown";
