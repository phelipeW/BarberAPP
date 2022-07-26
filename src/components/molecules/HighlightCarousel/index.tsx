import React, { useRef, useState } from 'react';
import { Dimensions, Image, View } from 'react-native';
import { IHighlightCarousel } from './interface';
import styles from './styles';
import theme from '../../../global/styles/theme';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const HighlightCarousel: React.FC<IHighlightCarousel> = params => {
  const { items, ...rest } = params;

  const SLIDER_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
  const ITEM_HEIGHT = Math.round(SLIDER_WIDTH * 0.5);
  const [sliderActive, setSliderActive] = useState(0);
  let carouselRef = useRef();

  const renderItem = ({ item, index }) => {
    return (
      <Image
        source={item.image}
        style={[styles.image, { width: ITEM_WIDTH, height: ITEM_HEIGHT }]}
        resizeMode="contain"
      />
    );
  };

  return (
    <View>
      <Carousel
        ref={ref => (carouselRef = ref)}
        data={items}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setSliderActive(index)}
      />

      <Pagination
        dotsLength={items.length}
        activeDotIndex={sliderActive}
        containerStyle={{ marginTop: -20 }}
        dotColor={theme.colors.white}
        dotStyle={styles.paginationDot}
        inactiveDotColor={theme.colors.white}
        inactiveDotOpacity={0.5}
        inactiveDotScale={1}
        carouselRef={carouselRef}
      />
    </View>
  );
};

export default HighlightCarousel;
