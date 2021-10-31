const Contracts = require('../model/contracts');
const { HttpCode } = require('../helpers/constants');

const get = async (req, res, next) => {
  try {
    const contracts = await Contracts.getAll();
    return res.status(HttpCode.OK).json({
      data: {
        contracts,
      },
    });
  } catch (e) {
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const contract = await Contracts.getById(req.params.id);
    if (contract) {
      return res.status(HttpCode.OK).json({
        data: {
          contract,
        },
      });
    } else {
      return res.status(HttpCode.NOT_FOUND).json({
        status: 'error',
        code: HttpCode.NOT_FOUND,
        data: 'Not Found',
      });
    }
  } catch (e) {
    next(e);
  }
};

const create = async (req, res, next) => {
  try {
    const contract = await Contracts.create(req.body);
    return res.status(HttpCode.CREATED).json({
      data: {
        contract,
      },
    });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const contract = await Contracts.update(req.params.id, req.body);
    if (contract) {
      return res.status(HttpCode.OK).json({
        data: {
          contract,
        },
      });
    } else {
      return res.status(HttpCode.NOT_FOUND).json({
        status: 'error',
        code: HttpCode.NOT_FOUND,
        data: 'Not Found',
      });
    }
  } catch (e) {
    next(e);
  }
};

const remove = async (req, res, next) => {
  try {
    const contract = await Contracts.remove(req.params.id);
    if (contract) {
      return res.status(HttpCode.OK).json({
        data: {
          contract,
        },
      });
    } else {
      return res.status(404).json({
        status: 'error',
        code: HttpCode.NOT_FOUND,
        data: 'Not Found',
      });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
};
