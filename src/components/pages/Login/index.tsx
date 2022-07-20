import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAuthStore } from '../../../store/auth';
import { CustomInput } from '../../atoms';
import styles from './styles';
import { Button, Icon } from '@rneui/themed';
import theme from '../../../global/styles/theme';
import { FontAwesome5 } from '@expo/vector-icons';

const Login: React.FC = () => {
  const { state, actions } = useAuthStore(store => store);

  function handleLogin() {
    actions.login(123123, 'test44');
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Icon
          name="scissors"
          type="entypo"
          color={theme.colors.white}
          size={40}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.loginText}>LOGIN</Text>
        <CustomInput
          placeholder="Email"
          leftIcon={{ type: 'material-icons', name: 'email' }}
        />
        <CustomInput
          placeholder="Senha"
          leftIcon={{ type: 'material-icons', name: 'lock' }}
          secureTextEntry
        />
        <Button
          buttonStyle={{
            backgroundColor: theme.colors.secondary,
            borderRadius: 30,
          }}
        >
          <Text style={styles.buttonText}>Entrar</Text>
          <Icon
            name="arrow-forward"
            type="ionicon"
            color={theme.colors.white}
            size={20}
          />
        </Button>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <TouchableOpacity style={{ marginTop: theme.metrics.baseMargin }}>
            <Text
              style={{
                color: theme.colors.primary,
                textDecorationLine: 'underline',
              }}
            >
              Cadastre-se
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: theme.metrics.baseMargin }}>
            <Text
              style={{
                color: theme.colors.primary,
              }}
            >
              Esqueci minha senha
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => console.log('face')}>
            <FontAwesome5 name="facebook" size={36} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('face')}>
            <FontAwesome5 name="google-plus-g" size={36} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('face')}>
            <FontAwesome5 name="apple" size={36} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
