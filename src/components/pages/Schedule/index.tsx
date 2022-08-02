import { AirbnbRating, Avatar, Icon } from '@rneui/themed';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import theme from '../../../global/styles/theme';
import { Header } from '../../molecules';
import styles from './styles';
import profBack from '../../../assets/images/prof_background.jpeg';

const Schedule: React.FC = ({ navigation }) => {
  const professionals = [
    {
      name: 'Tiaguinho Du Corte',
      rating: 4,
      image:
        'https://instafitblog.com/wp-content/uploads/2017/02/barba-navalha-min.jpg',
    },
    {
      name: 'Lipin Du Corte',
      rating: 4,
      image:
        'https://instafitblog.com/wp-content/uploads/2017/02/barba-navalha-min.jpg',
    },
    {
      name: 'Luis Du Corte',
      rating: 45,
      image:
        'https://instafitblog.com/wp-content/uploads/2017/02/barba-navalha-min.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      <Header
        leftIcon={
          <Icon type="ionicon" name="chevron-back" color={theme.colors.white} />
        }
        title="Selecionar profissional"
        leftAction={() => navigation.goBack()}
      />
      {professionals &&
        professionals.map(item => (
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
              />
            </View>
          </ImageBackground>
        ))}
    </View>
  );
};

export default Schedule;
