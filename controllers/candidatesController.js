

const db = require('../models');
const Candidate = db.Candidate;

exports.createOrUpdateCandidate = async (req, res) => {
    try {
        
        let candidate = await Candidate.findOne({
            where: { email: req.body.email }
            
        });
        
        if (candidate) {
            
            candidate = await candidate.update(req.body);
            res.status(200).json({ message: 'Candidate updated successfully', candidate });
        } else {
            
            candidate = await Candidate.create(req.body);
            res.status(201).json({ message: 'Candidate created successfully', candidate });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};


exports.getAllCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.findAll();
        res.status(200).json({ candidates });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteCandidateByEmail = async (req, res) => {
    const { email } = req.body; 

    try {
        const candidate = await Candidate.findOne({
            where: { email }
        });

        if (!candidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }

        await candidate.destroy();
        res.status(200).json({ message: 'Candidate deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};