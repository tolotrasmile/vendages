import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { interpolateColor } from 'react-native-redash';
import { clamp, scale } from './interpolations';
import useDimensions from 'hooks/dimensions';

function OnboardingIndicatorItem({ animation, margin, size, index }) {
  const { width } = useDimensions();
  const isActive = scale(animation, index, width);

  const color = interpolateColor(
    isActive,
    {
      inputRange: [0, 1],
      outputRange: [{ r: 255, g: 255, b: 255 }, { r: 255, g: 222, b: 137 }],
    },
    'rgb'
  );

  const w = clamp(isActive, [0, 1], [size, size * 3]);

  return (
    <Animated.View
      style={{
        width: w,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color,
        margin,
      }}
    />
  );
}

function Indicator({
  dotSize = 7,
  spacing = 3,
  count = 0,
  activeIndex,
  style,
  color,
  animation,
}) {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        style,
      ]}>
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <OnboardingIndicatorItem
            key={index}
            index={index}
            active={index === activeIndex}
            size={dotSize}
            margin={spacing}
            color={color}
            animation={animation}
          />
        ))}
    </View>
  );
}

export default Indicator;
