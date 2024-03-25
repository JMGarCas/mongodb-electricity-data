import Household from "../database/Household.mjs";

export const getHouseholds = async (req, res) => {
  try {
    const households = await Household.find({});
    res.json(households);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteAllHouseholds = async (req, res) => {
  try {
    await Household.deleteMany({});
    res.status(200).send("All households deleted");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteHousehold = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Household.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Household deleted");
    }
    throw new Error("Household not found");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const createHousehold = async (req, res) => {
  try {
    const household = new Household(req.body);
    await household.save();
    res.status(201).json(household);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
