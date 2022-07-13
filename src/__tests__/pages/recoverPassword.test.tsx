import React from 'react';
import { render } from '@testing-library/react-native';
import { RecoverPassword } from '../../components/pages';

describe('Page Recover Password', () => {
  it('Check if page recover password renders correctly', () => {
    const { container } = render(<RecoverPassword />);

    expect(container).toBeTruthy();
  });
});
