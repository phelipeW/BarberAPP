import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { Home, Barber, Professional, Schedule } from '../../components/pages';

export function HomeRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Barber">
      <Screen name="Home" component={Home} />
      <Screen name="Barber" component={Barber} />
      <Screen name="Professional" component={Professional} />
      <Screen name="Schedule" component={Schedule} />
    </Navigator>
  );
}
