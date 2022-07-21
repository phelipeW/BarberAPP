import { Icon, Image, SearchBar } from '@rneui/themed';
import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import theme from '../../../global/styles/theme';
import barberImg from '../../../assets/images/barber.png';
import { BarberCard } from '../../molecules';
import styles from './styles';

const Home: React.FC = () => {
  const barber = [
    {
      title: 'Du Corte',
      image: barberImg,
      rating: 4.2,
    },
    {
      title: 'Galinha Corte',
      image: barberImg,
      rating: 3.5,
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View style={styles.upperContainer}>
          <Icon
            name="scissors"
            type="entypo"
            color={theme.colors.white}
            size={40}
          />
        </View>
        <View style={{ flexDirection: 'row', paddingRight: 8 }}>
          <SearchBar
            placeholder="Busque por barbearias/salões"
            containerStyle={{
              backgroundColor: 'transparent',
              borderTopWidth: 0,
              borderBottomWidth: 0,
              flex: 1,
            }}
            inputContainerStyle={{ height: 40 }}
          />
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              backgroundColor: theme.colors.secondary,
              height: 40,
              width: 40,
              alignSelf: 'center',
            }}
          >
            <Icon
              type="ionicon"
              name="location-sharp"
              color={theme.colors.white}
              size={20}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.barbarText}>Barbearias na região</Text>
          {barber.map(item => (
            <BarberCard image={item.image} title={item.title} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
