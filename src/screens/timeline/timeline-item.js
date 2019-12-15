import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DOT_SIZE = 16;
const TOP_MARGIN = 30;

function TimelineItem({
  item,
  isLast,
  isFirst,
  separatorColor = '#eee',
  separatorWidth = 1,
}) {
  const { title, description, start, end } = item;

  return (
    <View style={{ flexDirection: 'row' }}>
      <View
        style={{
          width: 80,
          padding: 10,
          paddingTop: TOP_MARGIN - 1,
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{start}</Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          width: separatorWidth,
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: isFirst ? 'transparent' : separatorColor,
            alignItems: 'center',
            height: TOP_MARGIN,
            width: separatorWidth,
          }}
        />
        <View
          style={{
            width: DOT_SIZE,
            height: DOT_SIZE,
            borderRadius: DOT_SIZE / 2,
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: DOT_SIZE / 2,
              height: DOT_SIZE / 2,
              borderRadius: DOT_SIZE / 4,
              backgroundColor: 'white',
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: isLast ? 'transparent' : separatorColor,
            alignItems: 'center',
            width: separatorWidth,
            flex: 1,
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          marginVertical: 10,
          marginHorizontal: 20,
          padding: 16,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: separatorColor,
          flex: 1,
        }}>
        <Text
          style={{
            fontWeight: '900',
            fontSize: 16,
            fontFamily: 'Roboto',
          }}>
          {title}
        </Text>
        <Text style={{ marginTop: 6 }}>
          {start}
          {end && ` - ${end}`}
        </Text>
        {description && (
          <Text style={{ marginTop: 6, fontFamily: 'Raleway' }}>
            {description}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

export default TimelineItem;
