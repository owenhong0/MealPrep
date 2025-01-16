import { render, screen } from '@testing-library/react';
import App from './App';
import { expect } from 'chai';

describe('App Component', ()=> {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).to.not.be.null;
  })
})
