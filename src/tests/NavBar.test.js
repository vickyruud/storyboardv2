import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar';

test('renders app', () => {
  render(<NavBar/>);
  const linkElement = screen.getByText("NavBar");
  expect(linkElement).toBeInTheDocument();
});
