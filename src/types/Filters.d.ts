type FormFilters = {
  name: string;
  status: {
    value: null | "alive" | "dead" | "unknown";
    label: string;
  } | null;
};

type Filters = {
  name?: string;
  status?: null | "alive" | "dead" | "unknown";
  gender?: "female" | "male" | "genderless" | "unknown";
  species?: string;
  type?: string;
};
