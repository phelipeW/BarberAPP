import React from 'react';
import { Text, View } from 'react-native';
import { useAuthStore } from '../../../store/auth';
import { Button } from '../../atoms';

// import { Container } from './styles';

const Login: React.FC = () => {
  const { state, actions } = useAuthStore(store => store);

  function handleLogin() {
    actions.login(123123, 'teste');
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>{state.username}</Text>
      <Button testID="button-login" title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
