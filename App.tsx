import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AppRoutes } from './src/routes';
import theme from './src/global/styles/theme';

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar style="auto" />
      <AppRoutes />
    </NavigationContainer>
  );
}
