import Form from '@/components/Form';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Form', () => {
  it('has submit button', () => {
    render(<Form />);
    expect(screen.getByTestId('submit')).toBeInTheDocument();
  });
  it('has main category field', () => {
    render(<Form />);
    expect(screen.getByTestId('main-category')).toBeInTheDocument();
  });
  it('has sub category field', () => {
    render(<Form />);
    expect(screen.getByTestId('sub-category')).toBeInTheDocument();
  });
});
