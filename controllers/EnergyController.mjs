import Energy from "../database/Energy.mjs";
import filterAndSortDataByQuery from "../utils/filterAndSortDataByQuery.mjs";

export const getEnergies = async (req, res) => {
  try {
    const query = req.query;
    const energies = await Energy.find({});
    const filteredEnergies = filterAndSortDataByQuery(query, energies);
    res.json(filteredEnergies);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getEnergy = async (req, res) => {
  try {
    const { id } = req.params;
    const energy = await Energy.findById(id);
    if (energy) {
      return res.json(energy);
    }
    return res.status(404).send("Energy not found");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteAllEnergies = async (req, res) => {
  try {
    await Energy.deleteMany({});
    res.status(200).send("All energies deleted");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteEnergy = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Energy.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Energy deleted");
    }
    throw new Error("Energy not found");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const createEnergy = async (req, res) => {
  try {
    const energy = new Energy(req.body);
    await energy.save();
    res.status(201).json(energy);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateEnergy = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Energy.findByIdAndUpdate(id, req.body);
    if (updated) {
      const energy = await Energy.findById(id);
      return res.status(200).json(energy);
    }
    throw new Error("Energy not found");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getEnergiesByCountry = async (req, res) => {
  try {
    const { country } = req.params;
    const energies = await Energy.find({ entity: country });
    if (energies.length === 0) {
      return res.status(404).send("Country not found");
    }
    res.json(energies);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getEnergiesByYear = async (req, res) => {
  try {
    const { year } = req.params;
    const energies = await Energy.find({ year: year });
    if (energies.length === 0) {
      return res.status(404).send("Year not found");
    }
    res.json(energies);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
