import { AirbnbRating, Avatar, Icon } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import theme from '../../../global/styles/theme';
import { Header } from '../../molecules';
import styles from './styles';
import dayjs from 'dayjs';

type days = {
  date: string;
  dayOfWeek: string;
};

const Schedule: React.FC = ({ navigation }) => {
  const [days, setDays] = useState<days[]>([]);
  const [selectedDay, setSelectedDay] = useState({} as days);

  useEffect(() => {
    const dayArray = [];
    for (let i = 0; i < 7; i++) {
      const date = dayjs().add(i, 'day').format('DD/MM');
      const dayOfWeek = dayjs().add(i, 'day').format('ddd');
      dayArray.push({ date, dayOfWeek });
    }
    setSelectedDay(dayArray[0]);
    setDays(dayArray);
  }, []);

  return (
    <View style={styles.container}>
      <Header
        leftIcon={
          <Icon type="ionicon" name="chevron-back" color={theme.colors.white} />
        }
        title="Selecione o horário"
        leftAction={() => navigation.goBack()}
      />
      <View style={{ flex: 1 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            marginRight: theme.metrics.basePadding,
            maxHeight: 65,
            paddingTop: theme.metrics.basePadding,
          }}
        >
          {days.map(item => (
            <TouchableOpacity
              onPress={() => setSelectedDay(item)}
              style={[
                styles.dateContainer,
                {
                  backgroundColor:
                    selectedDay.date === item.date
                      ? theme.colors.secondary
                      : theme.colors.white,
                },
              ]}
            >
              <View style={styles.dayContainer}>
                <Text style={{ fontSize: 16, color: 'white' }}>
                  {item.dayOfWeek}
                </Text>
              </View>
              <Text
                style={{
                  marginLeft: 6,
                  color:
                    selectedDay.date === item.date
                      ? theme.colors.white
                      : theme.colors.black,
                }}
              >
                {item.date}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.bottomContainer}>
          <View></View>
        </View>
      </View>
    </View>
  );
};

export default Schedule;
