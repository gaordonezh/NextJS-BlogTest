export default function replaceContent(palabra, variables = []) {
  variables.forEach((variable) => {
    if (palabra.match(`{${variable.description}}`)) {
      palabra = palabra.replaceAll(
        `{${variable.description}}`,
        `${variable.value}`
      );
    }
  });
  return palabra;
}
