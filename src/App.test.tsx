import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('Renders checkboxes', () => {
    render(<App />);

    // check if App rendered the checkboxes
    expect(screen.getAllByRole('checkbox')).toHaveLength(7);
  });

  test.only('Shows and hides component on checkbox select', () => {
    render(<App />);

    // check if App rendered the checkboxes
    expect(screen.getAllByRole('checkbox')).toHaveLength(7);

    // select the first checkbox
    screen.getAllByRole('checkbox')[0].click();

    // check if App rendered the component
    expect(screen.queryByTestId('component')).toBeInTheDocument();

    // uncheck the first checkbox again
    screen.getAllByRole('checkbox')[0].click();

    // check if App removed the component
    expect(screen.queryByTestId('component')).not.toBeInTheDocument();
  });
});
