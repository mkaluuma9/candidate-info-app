

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
