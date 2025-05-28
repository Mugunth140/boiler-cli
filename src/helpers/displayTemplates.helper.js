import prompts from "prompts";

export async function displayTemplates(templates) {
  const choices = templates.map((template) => ({
    title: template.name,
    value: template
  }));

  const response = await prompts({
    type: 'select',
    name: 'template',
    message: 'Select a template:',
    choices
  });

  return response.template;
}