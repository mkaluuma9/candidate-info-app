const { Sequelize, DataTypes } = require('sequelize');
const CandidateModel = require('../models/candidate');

let sequelize;
let Candidate;

beforeAll(async () => {
  sequelize = new Sequelize('sqlite::memory:', { logging: false });
  Candidate = CandidateModel(sequelize, DataTypes);
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.close();
});

describe('Candidate Model', () => {
  beforeEach(async () => {
    await Candidate.destroy({ where: {} }); // Clear all data before each test
  });

  it('should create a candidate successfully', async () => {
    const candidateData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      callAvailability: '9 AM - 5 PM',
      linkedinUrl: 'https://www.linkedin.com/in/johndoe',
      githubUrl: 'https://github.com/johndoe',
      freeTextComment: 'This is a test comment.'
    };

    const candidate = await Candidate.create(candidateData);

    expect(candidate.firstName).toBe('John');
    expect(candidate.lastName).toBe('Doe');
    expect(candidate.email).toBe('john.doe@example.com');
    expect(candidate.phone).toBe('123-456-7890');
    expect(candidate.callAvailability).toBe('9 AM - 5 PM');
    expect(candidate.linkedinUrl).toBe('https://www.linkedin.com/in/johndoe');
    expect(candidate.githubUrl).toBe('https://github.com/johndoe');
    expect(candidate.freeTextComment).toBe('This is a test comment.');
  });

  it('should not create a candidate without an email', async () => {
    const candidateData = {
      firstName: 'Jane',
      lastName: 'Doe',
      phone: '123-456-7890',
      callAvailability: '9 AM - 5 PM',
      linkedinUrl: 'https://www.linkedin.com/in/janedoe',
      githubUrl: 'https://github.com/janedoe',
      freeTextComment: 'This is a test comment.'
    };

    try {
      await Candidate.create(candidateData);
    } catch (error) {
      expect(error.name).toBe('SequelizeValidationError');
    }
  });
});
