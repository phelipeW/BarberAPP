import { Input, InputProps } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import theme from '../../../global/styles/theme';

// import { Container } from './styles';

const CustomInput: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <Input
      inputContainerStyle={{
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 15,
        backgroundColor: theme.colors.background,
      }}
      containerStyle={{
        paddingHorizontal: 0,
      }}
      {...rest}
    />
  );
};

export default CustomInput;
