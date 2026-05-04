import ComputerLab from "../models/computerLabModel.js";

const getAllComputerLabsService = async () => {
  return await ComputerLab.find();
};

const getComputerLabByIdService = async (id) => {
  return await ComputerLab.findById(id);
};

const createComputerLabService = async (computerLabData) => {
  return await ComputerLab.create(computerLabData);
};

const updateComputerLabService = async (id, computerLabData) => {
  return await ComputerLab.findByIdAndUpdate(id, computerLabData, {
    new: true,
    runValidators: true,
  });
};

const deleteComputerLabService = async (id) => {
  return await ComputerLab.findByIdAndDelete(id);
};

export {
  getAllComputerLabsService,
  getComputerLabByIdService,
  createComputerLabService,
  updateComputerLabService,
  deleteComputerLabService,
};