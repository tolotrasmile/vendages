import Animated from 'react-native-reanimated';

export function clamp(animated, inputRange, outputRange) {
  return Animated.interpolate(animated, {
    inputRange,
    outputRange,
    extrapolate: Animated.Extrapolate.CLAMP,
  });
}

export function translateX(animated, index = 0, width, ratio = 2) {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const outputRange = [width / ratio, 0, -width / ratio];
  return clamp(animated, inputRange, outputRange);
}

export function translateY(animated, index = 0, width, height) {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const outputRange = [height, 0, 0];
  return clamp(animated, inputRange, outputRange);
}

export function opacity(animated, index = 0, min = 0, max = 1, width) {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const outputRange = [min, max, min];
  return clamp(animated, inputRange, outputRange);
}

export function scale(animated, index = 0, width) {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const outputRange = [0, 1, 0];
  return clamp(animated, inputRange, outputRange);
}
