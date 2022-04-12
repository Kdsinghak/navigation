import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default function Map() {
  return (
    <View style={styles.componentView}>
      <Text>Map</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  componentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
