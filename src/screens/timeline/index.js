import React from 'react';
import { SectionList, SafeAreaView } from 'react-native';
import TimelineItem from './timeline-item';
import TimelineHeader from './timeline-header';

const isLast = (section, index, key) => {
  return Boolean(section[key] && section[key].length - 1 === index);
};

function Timeline({ data }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index, section }) => (
          <TimelineItem
            item={item}
            isLast={isLast(section, index, 'data')}
            isFirst={index === 0}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <TimelineHeader title={title} />
        )}
      />
    </SafeAreaView>
  );
}

export default Timeline;
