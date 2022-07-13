import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import { Login } from '../../components/pages';

const clickMock = jest.fn();

describe('Page Login', () => {
  it('Check if page login renders correctly', () => {
    const { container } = render(<Login />);

    expect(container).toBeTruthy();
  });

  it('Check if login is handled', async () => {
    const { getByTestId, getByText } = render(<Login />);

    const button = getByTestId('button-login');
    expect(button).toBeTruthy();

    await waitFor(() => fireEvent.press(button));

    const textUpdated = getByText('B13');
    expect(textUpdated).toBeTruthy();
  });
});
