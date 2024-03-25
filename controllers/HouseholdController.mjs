import Household from "../database/Household.mjs";

export const getHouseholds = async (req, res) => {
  try {
    const households = await Household.find({});
    res.json(households);
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

export const updateHousehold = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await Household.findByIdAndUpdate(id, req.body);
        if (updated) {
            const household = await Household.findById(id);
            return res.status(200).json(household);
        }
        throw new Error("Household not found");
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }   
}