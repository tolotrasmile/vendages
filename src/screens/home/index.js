import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeItemText from './home-item-text';
import Animated from 'react-native-reanimated';
import Indicator from './slider-indicator';

const slides = [
  {
    description: 'Salomi',
    image: require('./img/3.jpg'),
    eventDate: '2019-11-17T09:34:00',
    city: 'Nantes',
    color: { r: 255, g: 222, b: 137 },
  },
  {
    description: 'Matrix',
    image: require('./img/4.jpg'),
    eventDate: '2019-12-17T18:24:00',
    city: 'Rennes',
    color: { r: 183, g: 85, b: 79 },
  },
  {
    description: 'Carmine Pink',
    image: require('./img/1.jpg'),
    eventDate: '2020-01-01T19:00:00',
    city: 'Paris',
    color: { r: 241, g: 78, b: 56 },
  },
  {
    description: 'Radical Red',
    image: require('./img/2.jpg'),
    eventDate: '2020-08-19T03:24:00',
    city: 'Lyon',
    color: { r: 255, g: 72, b: 120 },
  },
];

function Home() {
  const animation = useRef(new Animated.Value(0)).current;
  return (
    <View style={{ flex: 1 }}>
      <Animated.ScrollView
        pagingEnabled
        horizontal
        scrollEventThrottle={200}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: { x: animation },
            },
          },
        ])}
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: 'black',
        }}>
        {slides.map((slide, index) => (
          <HomeItemText
            key={index}
            animation={animation}
            index={index}
            slide={slide}
          />
        ))}
      </Animated.ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Indicator count={slides.length} animation={animation} />
      </View>
    </View>
  );
}

export default Home;
