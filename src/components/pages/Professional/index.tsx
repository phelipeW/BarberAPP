import { AirbnbRating, Avatar, Icon } from '@rneui/themed';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import theme from '../../../global/styles/theme';
import { Header } from '../../molecules';
import styles from './styles';
import profBack from '../../../assets/images/prof_background.jpeg';

const professionals = [
  {
    id: 1,
    name: 'Tiaguinho Du Corte',
    rating: 4,
    image:
      'https://instafitblog.com/wp-content/uploads/2017/02/barba-navalha-min.jpg',
  },
  {
    id: 2,
    name: 'Lipin Du Corte',
    rating: 4,
    image:
      'https://instafitblog.com/wp-content/uploads/2017/02/barba-navalha-min.jpg',
  },
  {
    id: 3,
    name: 'Luis Du Corte',
    rating: 45,
    image:
      'https://instafitblog.com/wp-content/uploads/2017/02/barba-navalha-min.jpg',
  },
];
const Professional: React.FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        leftIcon={
          <Icon type="ionicon" name="chevron-back" color={theme.colors.white} />
        }
        title="Selecione o profissional"
        leftAction={() => navigation.goBack()}
      />
      {professionals &&
        professionals.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('Schedule', { item })}
          >
            <ImageBackground
              source={profBack}
              style={styles.barbarContainer}
              imageStyle={styles.background}
            >
              <Avatar
                rounded
                source={{
                  uri: item.image,
                }}
                size="large"
              />
              <View style={{ marginLeft: 16 }}>
                <Text style={styles.name}>{item.name}</Text>
                <AirbnbRating
                  count={5}
                  reviews={[]}
                  defaultRating={item.rating}
                  size={20}
                  starContainerStyle={{
                    alignSelf: 'flex-start',
                    marginTop: -25,
                  }}
                  ratingContainerStyle={{
                    alignItems: 'flex-start',
                    alignSelf: 'flex-start',
                  }}
                  isDisabled
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default Professional;
