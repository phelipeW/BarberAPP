import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import {
  Login,
  RecoverRegister,
  RecoverPassword,
} from '../../components/pages';

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Screen name="Login" component={Login} />
      <Screen name="RecoverRegister" component={RecoverRegister} />
      <Screen name="RecoverPassword" component={RecoverPassword} />
    </Navigator>
  );
}
