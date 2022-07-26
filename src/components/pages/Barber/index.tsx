import { Icon, AirbnbRating, SearchBar } from '@rneui/themed';
import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import barberImg from '../../../assets/images/barber.png';
import theme from '../../../global/styles/theme';
import { HighlighCarousel, ServiceCard } from '../../molecules';
import styles from './styles';

const Barber: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const highLight = [
    { image: barberImg },
    { image: barberImg },
    { image: barberImg },
  ];

  const services = [
    {
      title: 'Corte do jaca',
      description: 'Corte mais pra frente 100% regua',
      price: 19.0,
    },
    {
      title: 'America',
      description: 'Quando nao to de america eu lanço o do jaca',
      price: 13.0,
    },
  ];

  return (
    <View style={{ backgroundColor: theme.colors.primary }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Image source={barberImg} style={styles.image} />
        <View style={styles.bottomContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.iconContainer}>
              <Icon
                type="ionicon"
                name="chevron-back"
                color={theme.colors.secondary}
                size={26}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Icon
                type="ionicon"
                name="heart-outline"
                color={theme.colors.secondary}
                size={26}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Tiago du Corte</Text>

          {/* <AirbnbRating
          count={5}
          reviews={[]}
          defaultRating={3}
          size={20}
          starContainerStyle={{ backgroundColor: 'red' }}
          ratingContainerStyle={{
            alignItems: 'flex-start',
            padding: 0,
            margin: 0,
            backgroundColor: 'green',
          }}
        /> */}

          <View style={styles.tabContainer}>
            <TouchableOpacity
              onPress={() => setSelectedTab(1)}
              style={[
                styles.itemTabContainer,
                {
                  borderBottomColor:
                    selectedTab == 1
                      ? theme.colors.secondary
                      : theme.colors.white,
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color:
                    selectedTab == 1
                      ? theme.colors.secondary
                      : theme.colors.white,
                }}
              >
                Serviços
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedTab(2)}
              style={[
                styles.itemTabContainer,
                {
                  borderBottomColor:
                    selectedTab == 2
                      ? theme.colors.secondary
                      : theme.colors.white,
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color:
                    selectedTab == 2
                      ? theme.colors.secondary
                      : theme.colors.white,
                }}
              >
                Galeria
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.highLightText}>Destaques</Text>
          <HighlighCarousel items={highLight} />
          <View style={{ paddingHorizontal: theme.metrics.basePadding * 2 }}>
            <View style={styles.searchContainer}>
              <Icon name="search" type="ionicon" style={{ marginRight: 4 }} />
              <TextInput placeholder="Buscar serviço" />
            </View>
            <View style={{ marginTop: 16 }}>
              {services.map(item => (
                <ServiceCard
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  onPress={() => console.log('STAR BOY')}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Barber;
