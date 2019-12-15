import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { bInterpolateColor } from 'react-native-redash';
import Animated from 'react-native-reanimated';
import moment from 'moment';

import Logo from 'component/logo';
import useDimensions from 'hooks/dimensions';
import { opacity, translateX, translateY, scale } from './interpolations';

const areEquals = (prev = {}, next = {}) => {
  return prev.label === next.label && prev.count === next.count;
};

const DateItem = React.memo(({ count, label }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: '300',
          fontFamily: 'Roboto',
          textAlign: 'center',
          color: '#FFFFFF',
        }}>
        {count}
      </Text>
      <Text
        style={{
          fontSize: 10,
          fontWeight: '800',
          fontFamily: 'Roboto',
          textAlign: 'center',
          textTransform: 'uppercase',
          color: '#FFFFFF',
        }}>
        {label}
      </Text>
    </View>
  );
}, areEquals);

function DateViewer({ color, eventDate }) {
  const [tick, setTick] = useState();
  const date = moment(new Date(eventDate));

  useEffect(() => {
    const now = moment();
    const id = setInterval(() => setTick(moment.utc(date.diff(now))), 1000);
    return () => clearInterval(id);
  }, [date, tick]);

  const getFormated = format => (tick ? tick.format(format) : '00');

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <DateItem label="JOURS" count={getFormated('DD')} />
      <HomeSeparator color={color} />
      <DateItem label="HEURES" count={getFormated('HH')} />
      <HomeSeparator color={color} />
      <DateItem label="Minutes" count={getFormated('mm')} />
      <HomeSeparator color={color} />
      <DateItem label="SECONDES" count={getFormated('ss')} />
    </View>
  );
}

function HomeSeparator({ color = '#E91C27' }) {
  return (
    <View
      style={{ backgroundColor: color, width: 4, borderRadius: 2, height: 20 }}
    />
  );
}

const ImageView = ({ source }) => {
  return (
    <View style={{ ...StyleSheet.absoluteFillObject }}>
      <Image
        style={{
          width: null,
          height: null,
          ...StyleSheet.absoluteFillObject,
        }}
        resizeMode="cover"
        source={source}
      />
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ ...StyleSheet.absoluteFillObject }}
        colors={['transparent', '#000000']}
      />
    </View>
  );
};

const toRGB = ({ r, g, b }) => `rgb(${r},${g},${b})`;

function HomeItemText({
  slide: {
    image,
    eventDate,
    city,
    description,
    color = { r: 241, g: 78, b: 56 },
  },
  index,
  animation,
}) {
  const { width, height } = useDimensions();
  const isActive = scale(animation, index, width);
  const colorStyle = bInterpolateColor(
    isActive,
    { r: 255, g: 255, b: 255 },
    color
  );

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{ height }}>
          <ImageView source={image} />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 20,
              backgroundColor: 'transparent',
              width,
            }}>
            <Animated.View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                opacity: opacity(animation, index, 0, 1, width),
                transform: [
                  { translateX: translateX(animation, index, width, -1) },
                ],
              }}>
              <Logo />
              <Animated.Text
                style={{
                  marginVertical: 10,
                  fontSize: 60,
                  fontWeight: '900',
                  fontFamily: 'Raleway',
                  textAlign: 'center',
                  color: colorStyle,
                  textTransform: 'uppercase',
                }}>
                La Holi
              </Animated.Text>
            </Animated.View>
            <Animated.View
              style={{
                opacity: opacity(animation, index, 0, 1, width),
                transform: [
                  { translateX: translateX(animation, index, width, 1) },
                ],
                minHeight: 60,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 30,
                  marginBottom: 10,
                  fontWeight: '500',
                  fontFamily: 'Roboto',
                  textAlign: 'center',
                  color: '#FFFFFF',
                }}>
                <Text>{city}</Text>
              </Text>
            </Animated.View>
          </View>
        </View>
        <Animated.View
          style={{
            width,
            height,
            backgroundColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 30,
            opacity: opacity(animation, index, 0, 1, width),
            transform: [
              { translateY: translateY(animation, index, width, 200) },
            ],
          }}>
          <Text
            style={{
              fontSize: 50,
              fontWeight: '900',
              fontFamily: 'Raleway',
              textAlign: 'center',
              textTransform: 'uppercase',
              color: '#FFF',
              marginVertical: 10,
            }}>
            <Text>{description}</Text>
          </Text>
          <DateViewer color={toRGB(color)} eventDate={eventDate} />
        </Animated.View>
      </ScrollView>
    </View>
  );
}

export default HomeItemText;
