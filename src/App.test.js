import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';
import SignupForm from './SignupForm'


test('renders learn react link', () => {
  const { getByLabelText, getByText } = render(<App />);
 

  
  expect(getByText('Create An Account')).toBeInTheDocument()
});

test('it test if the form elememts are present', () => {
  console.log('signup')
  const {getByTestId, getByLabelText, getByText } = render(<SignupForm />);
  
  expect(getByLabelText('Fullname')).toBeInTheDocument()
  expect(getByLabelText('Email')).toBeInTheDocument()
  expect(getByLabelText('Password')).toBeInTheDocument()
  expect(getByText('SignUp')).toBeInTheDocument()
  expect(getByText(/SignUp/i).closest('button')).toBeDisabled();

  

  fireEvent.change(getByLabelText("Fullname"), {
    target: { value: "John Bull" },
  });
  fireEvent.change(getByLabelText("Email"), {
    target: { value: "johnbull@gmail.com" },
  });
  fireEvent.change(getByLabelText("Password"), {
    target: { value: "firstoctober" },
  });
  expect(getByText(/SignUp/i).closest('button')).not.toBeDisabled();

  expect(getByLabelText('Fullname').value).toBe('John Bull')
  expect(getByLabelText('Email').value).toBe('johnbull@gmail.com')
  expect(getByLabelText('Password').value).toBe('firstoctober')

});


