import React from 'react';
import { Text, useColorScheme, View } from 'react-native';

const Home: React.FC = () => {
  const scheme = useColorScheme();
  return (
    <View
      testID="home-container"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}
    >
      <Text>{scheme}</Text>
    </View>
  );
};

export default Home;
