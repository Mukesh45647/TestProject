import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  BACKGROUND_IMAGE,
  CLOSE,
  UPLOAD,
  PROFILE_PIC,
  NOTIFICATION,
  HEART,
  IMAGE,
  LINK,
} from '../utils/Images';
import React, {useState, useEffect, useMemo} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Loader from '../utils/Loader';
import * as mainAction from '../../redux/action/mainAction'
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = (props) => {
  const [selectedCountryCode, setselectedCountryCode] = useState('')
  const selected = useSelector(state => state.main.selectedItem);
  const [loading, setloader] = useState(false)
  const [selectedItem, setselectedItem] = useState({})
  const dispatch = useDispatch()


useEffect(() => {
setloader(true)
  dispatch(mainAction.getCountries()).then(res=>{
    setloader(false)
  })
}, [])

useMemo(() => {
  setselectedItem(selected)
}, [selected])


  const selectCountryCode = ()=> {
props.navigation.navigate('countryList')
  }
  return (
    <SafeAreaView style={styles.container}>
      <Loader loading={loading}/>
      <Image style={styles.imageView} source={BACKGROUND_IMAGE}/>


      <View style={[styles.imageView, {position: 'absolute'}]}>
        <View style={styles.centerItem}>
          <View style={styles.row}>
            <Image style={styles.image} resizeMode={'center'} source={CLOSE} />
            <Image style={styles.image} resizeMode={'center'} source={UPLOAD} />
          </View>
          <View
            style={styles.profileView}>
            <Image
              style={styles.roundImage}
              resizeMode={'center'}
              source={PROFILE_PIC}
            />
            <Text style={styles.text18}>
              Lucile Barrett
            </Text>
            <Text style={styles.text14}>New York, NY</Text>
          </View>

          <View style={styles.iconRow}>
            <View style={styles.alignCenter}>
              <Image
                style={styles.image}
                resizeMode={'center'}
                source={NOTIFICATION}
              />
              <Text style={styles.text10}>
                Alerts
              </Text>
              <Text style={styles.text12}>6</Text>
            </View>

            <View style={styles.alignCenter}>
              <Image
                style={styles.image}
                resizeMode={'center'}
                source={HEART}
              />
              <Text style={styles.text10}>
                Places
              </Text>
              <Text style={styles.text12}>40</Text>
            </View>

            <View style={styles.alignCenter}>
              <Image
                style={styles.image}
                resizeMode={'center'}
                source={IMAGE}
              />
              <Text style={styles.text10}>
                Shorts
              </Text>
              <Text style={styles.text12}>60</Text>
            </View>

            <View style={styles.alignCenter}>
              <Image
                style={styles.image}
                resizeMode={'center'}
                source={LINK}
              />
              <Text style={styles.text10}>
                Friends
              </Text>
              <Text style={styles.text12}>60</Text>
            </View>
          </View>
        </View>

      </View>
        <View style={styles.field}>
        <Text style={[styles.text12, { color: 'black', marginTop: hp(5) }]}>Select Country</Text>
      {!selectedItem.country_name ?
          <TouchableOpacity onPress={selectCountryCode} style={styles.textfield}>
            <Text style={[styles.text10, { color: '#c6c6c6' }]}>Search</Text>
          </TouchableOpacity>
   
          :
          <TouchableOpacity onPress={selectCountryCode} style={[styles.row, { paddingHorizontal: 0, alignItems: 'center', marginTop: hp(2) }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.countryImage} resizeMode={'contain'} source={{uri:selectedItem.image}} />
              <Text style={[styles.text12, { color: 'black', marginStart: wp(3) }]}>{selectedItem.country_name}</Text>
              <Text style={[styles.text12, { color: 'gray', marginStart: wp(3) }]}>{'+' + selectedItem.phone_code}</Text>
            </View>
            <Text style={[styles.text12, { color: 'black' }]}>Edit</Text>
          </TouchableOpacity>
          
          }
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
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: wp(5),
    marginTop: wp(15),
  },
  roundImage: {
    height: hp(15),
    width: wp(30),
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
    //backgroundColor: 'black',
  }, text18: { color: 'white', marginTop: hp(2), fontSize: 18 },
  text14: { color: 'white', fontSize: 14 },
  text10: { color: 'white', fontSize: 10, color: 'gray' },
  text12: { color: 'white', fontSize: 12, },
  alignCenter: {
    alignItems: 'center'
  }, centerItem: {
    justifyContent: 'center',
    flex: 1, 
  }, profileView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(100),
    marginTop: hp(8),
  }, field: {

    paddingHorizontal: wp(5),
  },
  textfield: {
    height: 44,
    borderColor: '#c6c6c6',
    borderWidth: 1,
    marginTop: hp(1),
    borderRadius: 5,
    paddingHorizontal: wp(2),
    alignItems: 'center',
    flexDirection: 'row'
  },
  selectedFlag: {
    flexDirection: 'row',

  }, countryImage: {
    width: 36,
    height: 36,
    borderRadius: 18
  },

});

export default HomeScreen;
