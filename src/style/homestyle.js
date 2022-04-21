import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  componentView: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    height: 30,
    width: 30,
    margin: 10,
    tintColor: '#443124',
  },
  location: {
    flexDirection: 'row',
    margin: 30,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
  destination: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  driverImg: {
    height: 40,
    width: 40,
  },
  card: {
    textAlign: 'center',
    backgroundColor: '#CDC7C4',
    marginLeft: 30,
    width: '75%',

    padding: 10,
    borderRadius: 10,
    shadowColor: '#CDC7C4',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.65,

    elevation: 5,
  },
  locationcon: {
    // flex: 1,
    // backgroundColor: 'aqua',
  },

  loactioncard: {
    padding: 20,
    backgroundColor: 'grey',
  },
});

export default styles;
