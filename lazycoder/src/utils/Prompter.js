import inquirer from "inquirer";
const prompt = async (
  name,
  message,
  type = "input",
  choices = [],
  defaultValue,
  validate,
  when,
  transformer,
  filter
) => {
  const answers = await inquirer.prompt([
    {
      name,
      message,
      type,
      choices,
      default: defaultValue,
      validate,
      when,
      transformer,
      filter
    },
  ]);

  return answers[name];
};
const input = (name, message) => prompt(name, message);
const password = (name, message) => prompt(name, message, "password");
const confirm = (name, message) => prompt(name, message, "confirm");
const select = (name, message, choices) =>
  prompt(name, message, "list", choices);
const multiSelect = (name, message, choices) =>
  prompt(name, message, "checkbox", choices);

export { prompt, input, password, confirm, select, multiSelect };
