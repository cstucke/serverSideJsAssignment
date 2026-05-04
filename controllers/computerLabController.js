import {
  getAllComputerLabsService,
  getComputerLabByIdService,
  createComputerLabService,
  updateComputerLabService,
  deleteComputerLabService,
} from "../services/computerLabService.js";

const getAllComputerLabs = async (req, res) => {
  try {
    const computerLabs = await getAllComputerLabsService();
    res.status(200).json(computerLabs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getComputerLabById = async (req, res) => {
  try {
    const computerLab = await getComputerLabByIdService(req.params.id);

    if (!computerLab) {
      return res.status(404).json({ message: "Computer lab not found" });
    }

    res.status(200).json(computerLab);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createComputerLab = async (req, res) => {
  try {
    const computerLab = await createComputerLabService(req.body);
    res.status(201).json(computerLab);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateComputerLab = async (req, res) => {
  try {
    const updatedComputerLab = await updateComputerLabService(
      req.params.id,
      req.body
    );

    if (!updatedComputerLab) {
      return res.status(404).json({ message: "Computer lab not found" });
    }

    res.status(200).json(updatedComputerLab);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteComputerLab = async (req, res) => {
  try {
    const deletedComputerLab = await deleteComputerLabService(req.params.id);

    if (!deletedComputerLab) {
      return res.status(404).json({ message: "Computer lab not found" });
    }

    res.status(200).json({ message: "Computer lab deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getAllComputerLabs,
  getComputerLabById,
  createComputerLab,
  updateComputerLab,
  deleteComputerLab,
};