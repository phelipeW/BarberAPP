import React from 'react';
import { render } from '@testing-library/react-native';
import { AppRoutes } from '../../routes';
import { NavigationContainer } from '@react-navigation/native';

const mockedDispatch = jest.fn();
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

describe('App Navigation', () => {
  beforeEach(() => {
    mockedDispatch.mockClear();
  });

  it('Check if auth route renders correctly', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>,
    );

    const container = getByTestId('button-login');

    expect(container).toBeTruthy();
  });
});
