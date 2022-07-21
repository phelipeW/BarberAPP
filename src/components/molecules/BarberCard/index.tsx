import React from 'react';
import {
  ImageSourcePropType,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  image: ImageSourcePropType;
}

const BarberCard: React.FC<Props> = item => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
    </TouchableOpacity>
  );
};

export default BarberCard;
