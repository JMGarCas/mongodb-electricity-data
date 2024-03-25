import Household from '../database/Household.mjs';

const getHouseholds = async (req, res) => {
    try{
        const households = await Household.find({});
        res.json(households);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

export default getHouseholds;