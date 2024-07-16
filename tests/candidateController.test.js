const db = require('../models');
const candidateController = require('../controllers/candidatesController');

jest.mock('../models');

describe('candidateController', () => {
    let req, res;

    beforeEach(() => {
        req = { body: { email: 'test@example.com', name: 'John Doe' } };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('createOrUpdateCandidate', () => {
        it('should create a new candidate', async () => {
            db.Candidate.findOne.mockResolvedValue(null);
            db.Candidate.create.mockResolvedValue({ id: 1, ...req.body });

            await candidateController.createOrUpdateCandidate(req, res);

            expect(db.Candidate.findOne).toHaveBeenCalledWith({ where: { email: req.body.email } });
            expect(db.Candidate.create).toHaveBeenCalledWith(req.body);
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ message: 'Candidate created successfully', candidate: { id: 1, ...req.body } });
        });

        it('should update an existing candidate', async () => {
            const candidate = { update: jest.fn().mockResolvedValue({ id: 1, ...req.body }) };
            db.Candidate.findOne.mockResolvedValue(candidate);

            await candidateController.createOrUpdateCandidate(req, res);

            expect(db.Candidate.findOne).toHaveBeenCalledWith({ where: { email: req.body.email } });
            expect(candidate.update).toHaveBeenCalledWith(req.body);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ message: 'Candidate updated successfully', candidate: { id: 1, ...req.body } });
        });

        it('should return server error on exception', async () => {
            db.Candidate.findOne.mockRejectedValue(new Error('Server error'));

            await candidateController.createOrUpdateCandidate(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Server error' });
        });
    });

    describe('getAllCandidates', () => {
        it('should return all candidates', async () => {
            const candidates = [{ id: 1, email: 'test@example.com', name: 'John Doe' }];
            db.Candidate.findAll.mockResolvedValue(candidates);

            await candidateController.getAllCandidates(req, res);

            expect(db.Candidate.findAll).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ candidates });
        });

        it('should return server error on exception', async () => {
            db.Candidate.findAll.mockRejectedValue(new Error('Server error'));

            await candidateController.getAllCandidates(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Server error' });
        });
    });

    describe('deleteCandidateByEmail', () => {
        it('should delete an existing candidate', async () => {
            const candidate = { destroy: jest.fn().mockResolvedValue() };
            db.Candidate.findOne.mockResolvedValue(candidate);

            req.body = { email: 'test@example.com' };

            await candidateController.deleteCandidateByEmail(req, res);

            expect(db.Candidate.findOne).toHaveBeenCalledWith({ where: { email: req.body.email } });
            expect(candidate.destroy).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ message: 'Candidate deleted successfully' });
        });

        it('should return 404 if candidate not found', async () => {
            db.Candidate.findOne.mockResolvedValue(null);

            req.body = { email: 'test@example.com' };

            await candidateController.deleteCandidateByEmail(req, res);

            expect(db.Candidate.findOne).toHaveBeenCalledWith({ where: { email: req.body.email } });
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'Candidate not found' });
        });

        it('should return server error on exception', async () => {
            db.Candidate.findOne.mockRejectedValue(new Error('Server error'));

            req.body = { email: 'test@example.com' };

            await candidateController.deleteCandidateByEmail(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Server error' });
        });
    });
});
