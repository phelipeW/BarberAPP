import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { IServiceCard } from './interface';
import background from '../../../assets/images/barber_background.jpeg';
import styles from './styles';
import theme from '../../../global/styles/theme';
import { currencyMask } from '../../../utils';
// import { Container } from './styles';

const ServiceCard: React.FC<IServiceCard> = ({
  description,
  title,
  price,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        style={{ padding: theme.metrics.basePadding, marginBottom: 16 }}
        imageStyle={styles.background}
        source={background}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{currencyMask(price)}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ServiceCard;
