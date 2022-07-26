import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from '../../components/pages';
import { Barber } from '../../components/pages';

export function HomeRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Barber">
      <Screen name="Home" component={Home} />
      <Screen name="Barber" component={Barber} />
    </Navigator>
  );
}
