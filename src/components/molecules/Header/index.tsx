import React from 'react';
import theme from '../../../global/styles/theme';
import styles from './styles';
import { TouchableOpacity, View, ViewProps, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Icon } from '@rneui/themed';

interface Props extends ViewProps {
  title?: string;
  titleColor?: string;
  leftIcon?: string;
  leftAction?: () => void;
  leftText?: string;
  leftIconSize?: number;
  rightIcon?: string;
  rightAction?: () => void;
  bold?: boolean;
}

const CustomHeader: React.FC<Props> = ({
  title,
  titleColor,
  leftIcon,
  leftAction,
  leftText,
  leftIconSize,
  rightIcon,
  rightAction,
  bold,
  style,
  ...rest
}) => {
  return (
    <View style={[styles.container, style]} {...rest}>
      {(leftText || leftIcon) && (
        <TouchableOpacity style={styles.leftContainer} onPress={leftAction}>
          {leftIcon && leftIcon}
          {leftText && (
            <Text style={[styles.leftText, leftIcon && { marginLeft: 8 }]}>
              {leftText}
            </Text>
          )}
        </TouchableOpacity>
      )}
      {title && (
        <View style={styles.titleContainer}>
          <Text
            style={{
              color: titleColor || theme.colors.white,
              fontWeight: bold ? 'bold' : '400',
              fontSize: 16,
            }}
          >
            {title}
          </Text>
        </View>
      )}
      {rightIcon ? (
        <TouchableOpacity style={styles.rightContainer} onPress={rightAction}>
          {rightIcon && (
            <Icon
              type="ionicon"
              name={rightIcon}
              size={30}
              color={theme.colors.white}
            />
          )}
        </TouchableOpacity>
      ) : (
        <Icon
          type="ionicon"
          name={rightIcon}
          color={theme.colors.transparent}
        />
      )}
    </View>
  );
};

export default CustomHeader;
