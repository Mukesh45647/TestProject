import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import React, { useEffect, useState, useMemo } from 'react';

import { BACKICON, LOUPE, NOTIFICATION } from '../utils/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useSelector, useDispatch } from 'react-redux';
import * as mainAction from '../../redux/action/mainAction'

const CountryList = (props) => {
const [data, setdata] = useState([])
  const countryList = useSelector(state => state.main.CountryList);
  const [selectedItem, setselectedItem] = useState({})
  const selected = useSelector(state => state.main.selectedItem);
  const sortedList = useSelector(state => state.main.selectedList);
  
  const [isShow, setisShow] = useState(false)
  const dispatch = useDispatch()

  useMemo(() => {
    if(sortedList.length > 0 ){
      setdata(sortedList)
      const myTimeout = setTimeout(()=>{
        var array = sortedList
        const filteredItem = array.filter((item)=>item.country_id != selected.country_id)
        setdata(filteredItem)
        dispatch(mainAction.setSelectedList(filteredItem))
      }, 10000);
    }else{
      setdata(countryList.countries)
      dispatch(mainAction.setSelectedList(countryList.countries))
    }
  }, [props])

  const onItemClick=(item)=>{
    setisShow(true)
    setselectedItem(item)
  }
  const onConfrmClick = ()=>{
    dispatch(mainAction.setSelectedItem(selectedItem))
    props.navigation.goBack()
  }

  


  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={()=>{onItemClick(item)}} style={[styles.row, styles.renderMain]}>
        <View style={styles.subView}>
          <Image style={styles.image} resizeMode={'contain'} source={{uri:item.image}} />
          <Text style={[styles.text12, { color: 'black', marginStart: wp(3) }]}>{item.country_name}</Text>
        </View>
        <Text style={[styles.text12, { color: 'gray' }]}>{'(+'+item.phone_code + ')'}</Text>
      </TouchableOpacity>
    )
  }
  const diveder = () => {
    return(
      <View
      style={{
        alignSelf: 'center',
        backgroundColor: 'gray',
        height: 1,
        width:wp(90), 
        marginTop: 8}}
    />
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.row, { alignItems: 'center', marginHorizontal: wp(2) }]}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            resizeMode={'center'}
            source={BACKICON}
          />
        </TouchableOpacity>
        <Text style={[styles.text18, { marginStart: 12 }]}>
          Select Country
        </Text>
      </View>
      <View style={styles.searchBox}>
        <Image
          style={styles.icon}
          resizeMode={'center'}
          source={LOUPE}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={t => {

          }}
        />

      </View>
      {
        isShow && 
      <TouchableOpacity style={[styles.row, styles.selectedItem]}>
      <View style={styles.subView}>
          <Image style={styles.image} resizeMode={'contain'} source={{uri:selectedItem.image}} />
          <Text style={[styles.text12, { color: 'black', marginStart: wp(3) }]}>{selectedItem.country_name}</Text>
        </View>
        <Text style={[styles.text12, { color: 'gray' }]}>{'(+'+selectedItem.phone_code + ')'}</Text>
      </TouchableOpacity>
      }
      <View style={styles.flatList}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ItemSeparatorComponent={diveder}
          keyExtractor={item => item.country_id}
        />
      </View>

      {
        isShow &&
      <TouchableOpacity onPress={()=>{onConfrmClick()}} style={styles.button}>
        <Text style={[styles.text12, {fontSize: 14}]}>Confirm</Text>
      </TouchableOpacity>
      }

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { paddingHorizontal: wp(5), marginTop: wp(5), flex: 1 },
  row: {
    flexDirection: 'row'
  }, text18: { color: 'black', fontSize: 18 },
  image: {
    width: 36,
    height: 36,
    borderRadius: 18
  }, text12: { color: 'white', fontSize: 12, },
  text10: { color: 'white', fontSize: 10, color: 'gray' },
  searchBox: {
    height: 44,
    borderColor: '#c6c6c6',
    borderWidth: 1,
    marginTop: hp(1),
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp(3)
  }, textInput: { flex: 1, marginStart: wp(2) },
  flatList: {
    marginTop: hp(2)
  }, button:{
    width: wp(40), 
    height: hp(6), 
    backgroundColor: 'black', 
    position: 'absolute', 
    borderRadius: 20, 
    alignSelf: 'center', 
    marginTop: 'auto', 
    alignItems: 'center', 
    justifyContent: 'center', 
    bottom: 0, marginBottom: hp(10)
  }, selectedItem: {justifyContent: 'space-between', marginVertical: hp(1), alignItems: 'center', backgroundColor: '#c9c9c9', paddingHorizontal: wp(2), paddingVertical: hp(1)},
  icon: {
    width: wp(5),
    height: hp(5),
  },renderMain:{
    justifyContent: 'space-between', marginVertical: hp(1), alignItems: 'center'
  }, subView:{
    flexDirection: 'row', alignItems: 'center'
  }

})

export default CountryList;


