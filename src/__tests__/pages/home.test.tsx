import React from 'react';
import { render } from '@testing-library/react-native';
import { Home } from '../../components/pages';

describe('Page Home', () => {
  it('Check if page home renders correctly', () => {
    const { container } = render(<Home />);

    expect(container).toBeTruthy();
  });
});
