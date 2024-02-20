export default function formatDropdownOptions(options: string[]) {
  return options.map((option) => {
    return { value: option, label: option };
  });
}
