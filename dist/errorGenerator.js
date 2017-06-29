export function errorGenerator(errors) {
    var errorFieldKeys = Object.keys(errors);
    var generatedErrors = {};
    errorFieldKeys.forEach(function (fieldKey) {
        generatedErrors["/" + fieldKey] = function () {
            return {
                message: errors[fieldKey][0]
            };
        };
    });
    return generatedErrors;
}
