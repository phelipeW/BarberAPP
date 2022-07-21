import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { Navigator, Screen, Group } = createNativeStackNavigator();

import { AuthRoutes } from './Auth';
import { HomeRoutes } from './Home';

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="HomeRoutes" component={HomeRoutes} />
    </Navigator>
  );
}
