import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  // ActivityIndicator,
  Text,
  ActivityIndicator
} from 'react-native';
import { color } from '../comman/theme';


const Loader = props => {
  const {
    loading,
    ...attributes
  } = props;
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {console.log('close modal')}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={true}
            size="large" />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
    zIndex:100,
  },
  activityIndicatorWrapper: {
    // backgroundColor: '#FFFFFF',
    // height: 100,
    // width: 100,
    // borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default Loader;