const db = require('../models');
const Candidate = db.Candidate;

// Function to create or update a candidate
exports.createOrUpdateCandidate = async (candidateData) => {
    try {
        let candidate = await Candidate.findOne({
            where: { email: candidateData.email }
        });

        if (candidate) {
            candidate = await candidate.update(candidateData);
            return { message: 'Candidate updated successfully', candidate };
        } else {
            candidate = await Candidate.create(candidateData);
            return { message: 'Candidate created successfully', candidate };
        }
    } catch (err) {
        throw err; // Let the caller handle the error
    }
};

// Function to retrieve all candidates
exports.getAllCandidates = async () => {
    try {
        return await Candidate.findAll();
    } catch (err) {
        throw err;
    }
};

// Function to delete a candidate by email
exports.deleteCandidateByEmail = async (email) => {
    try {
        const candidate = await Candidate.findOne({
            where: { email }
        });

        if (!candidate) {
            throw new Error('Candidate not found');
        }

        await candidate.destroy();
        return { message: 'Candidate deleted successfully' };
    } catch (err) {
        throw err;
    }
};
