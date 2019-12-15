import React from 'react';
import { View, Text } from 'react-native';
const HORIZONTAL_MARGIN = 16;

function TimelineHeader({ title }) {
  return (
    <View
      style={{
        paddingVertical: HORIZONTAL_MARGIN,
        flexDirection: 'row',
        backgroundColor: '#ffffffee',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#efefef',
          borderRadius: 1,
          marginHorizontal: HORIZONTAL_MARGIN,
          height: 2,
          flex: 1,
        }}
      />
      <Text
        style={{
          fontSize: 14,
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
      <View
        style={{
          backgroundColor: '#efefef',
          borderRadius: 1,
          marginHorizontal: HORIZONTAL_MARGIN,
          height: 2,
          flex: 1,
        }}
      />
    </View>
  );
}

export default TimelineHeader;
