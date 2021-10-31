const Conract = require('./schemas/contract');

const getAll = async () => {
  const results = await Conract.find({});
  return results;
};

const getById = async (id) => {
  const result = await Conract.findOne({ _id: id });
  return result;
};

const create = async (body) => {
  const result = await Conract.create(body);
  return result;
};

const update = async (id, body) => {
  const result = await Conract.findByIdAndUpdate(
    { _id: id },
    { ...body },
    { new: true }
  );
  return result;
};

const remove = async (id) => {
  const result = await Conract.findByIdAndRemove(id);
  return result;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
