export function errorGenerator(errors) {
  const errorFieldKeys = Object.keys(errors);
  const generatedErrors = {};

  errorFieldKeys.forEach(fieldKey => {
    generatedErrors[`/${fieldKey}`] = () => {
      return {
        message: errors[fieldKey][0]
      };
    }
  });

  return generatedErrors;
}
