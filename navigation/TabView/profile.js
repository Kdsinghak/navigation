import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default function Profile() {
  return (
    <View style={styles.componentView}>
      <Text>Profile</Text>
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
