const Joi = require("@hapi/joi");

const product = Joi.object({
  _id: Joi.string().optional(),
  name: Joi.string().required(),
  description: Joi.string().optional(),
  category: Joi.string().required(),
  price: Joi.number().required(),
  availableUnits: Joi.number().required(),
});

const updateProduct = Joi.object({
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  category: Joi.string().optional(),
  price: Joi.number().optional(),
  availableUnits: Joi.number().optional(),
});

function validateProduct(req, res, next) {
  let schema = null;
  if (req.method === "POST") schema = product;
  else if (req.method === "PATCH") schema = updateProduct;
  const { error } = schema.validate(req.body);
  if (error) next(error.details[0]);
  next();
}

module.exports = validateProduct;
