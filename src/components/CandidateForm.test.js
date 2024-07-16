import { render, screen, fireEvent } from '@testing-library/react';
import CandidateForm from './CandidateForm';

test('renders CandidateForm component', () => {
  render(<CandidateForm />);
  expect(screen.getByText('Application form')).toBeInTheDocument();
  // Additional tests for form inputs
  expect(screen.getByLabelText('First Name:*')).toBeInTheDocument();
  expect(screen.getByLabelText('Last Name:*')).toBeInTheDocument();
  // Add similar checks for other form inputs and labels
});

test('validates email input', async () => {
  render(<CandidateForm />);
  const emailInput = screen.getByLabelText('Email:*');
  fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
  expect(screen.getByText('Email must contain an @ sign')).toBeInTheDocument();
});

test('submits form data', async () => {
  render(<CandidateForm />);
  fireEvent.change(screen.getByLabelText('First Name:*'), { target: { value: 'John' } });
  fireEvent.change(screen.getByLabelText('Last Name:*'), { target: { value: 'Doe' } });
  fireEvent.change(screen.getByLabelText('Email:*'), { target: { value: 'john.doe@email.com' } });
  fireEvent.submit(screen.getByText('Submit'));
  // Add assertions for form submission
});

test('handles form submission error', async () => {
  render(<CandidateForm />);
  fireEvent.change(screen.getByLabelText('First Name:*'), { target: { value: 'John' } });
  fireEvent.change(screen.getByLabelText('Last Name:*'), { target: { value: 'Doe' } });
  fireEvent.change(screen.getByLabelText('Email:*'), { target: { value: 'john.doe@email.com' } });
  fireEvent.submit(screen.getByText('Submit'));
  // Add assertions for handling form submission errors
});
