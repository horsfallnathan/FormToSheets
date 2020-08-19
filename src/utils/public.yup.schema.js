const yup = require("yup");
const schemaRules = {
  name: yup
    .string()
    .matches(
      /^(?:(\w+-?\w+)) (?:(\w+))(?: (\w+))?$/,
      "Should contain at least a first and last name. ex. John Bandy"
    )
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    .required(),
};
const schema = yup.object().shape(schemaRules);
module.exports = schema;
