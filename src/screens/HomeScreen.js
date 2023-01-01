import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import {
  BACKGROUND_IMAGE,
  CLOSE,
  UPLOAD,
  PROFILE_PIC,
  NOTIFICATION,
} from '../utils/Images';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}>
        <View>
          <View style={styles.row}>
            <Image style={styles.image} resizeMode={'center'} source={CLOSE} />
            <Image style={styles.image} resizeMode={'center'} source={UPLOAD} />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: wp(100),
              marginTop: hp(5),
            }}>
            <Image
              style={styles.roundImage}
              resizeMode={'center'}
              source={PROFILE_PIC}
            />
            <Text style={{color: 'white', marginTop: hp(4), fontSize: 18}}>
              Lucile Barrett
            </Text>
            <Text style={{color: 'white', fontSize: 14}}>New York, NY</Text>
          </View>

          <View style={styles.row}>
            <View style={{alignItems: 'center'}}>
              <Image
                style={styles.image}
                resizeMode={'center'}
                source={NOTIFICATION}
              />
              <Text style={{color: 'white', marginTop: 2, fontSize: 10}}>
                Alerts
              </Text>
              <Text style={{color: 'white', fontSize: 14}}>6</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Image
                style={styles.image}
                resizeMode={'center'}
                source={NOTIFICATION}
              />
              <Text style={{color: 'white', marginTop: 2, fontSize: 10}}>
                Alerts
              </Text>
              <Text style={{color: 'white', fontSize: 14}}>6</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Image
                style={styles.image}
                resizeMode={'center'}
                source={NOTIFICATION}
              />
              <Text style={{color: 'white', marginTop: 2, fontSize: 10}}>
                Alerts
              </Text>
              <Text style={{color: 'white', fontSize: 14}}>6</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Image
                style={styles.image}
                resizeMode={'center'}
                source={NOTIFICATION}
              />
              <Text style={{color: 'white', marginTop: 2, fontSize: 10}}>
                Alerts
              </Text>
              <Text style={{color: 'white', fontSize: 14}}>6</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    marginTop: wp(10),
  },
  roundImage: {
    height: hp(20),
    width: wp(40),
    borderRadius: hp(15),
    backgroundColor: 'red',
    alignItems: 'center',
  },
  image: {
    width: wp(5),
    height: hp(5),
  },
  backgroundImage: {
    width: 500,
    height: 500,
    justifyContent: 'center',
  },
  imageView: {
    width: wp(100),
    height: hp(75),
    backgroundColor: 'black',
  },
});

export default HomeScreen;
