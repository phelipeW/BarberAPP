import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { Navigator, Screen, Group } = createNativeStackNavigator();

import { AuthRoutes } from './Auth';

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="AuthRoutes" component={AuthRoutes} />
    </Navigator>
  );
}
