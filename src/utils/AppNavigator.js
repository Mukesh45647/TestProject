import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, Image, Platform, TouchableOpacity, PixelRatio } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/Dashboard/HomeScreen';
import AddServices from '../screens/ServciesScreens/AddServices';
import TypesofServices from '../screens/ServciesScreens/TypesofServices';
import AddExpense from '../screens/ExpenseScreens/AddExpense';
import Reason from '../screens/CommanScreen/Reason';
import AddRefuel from '../screens/RefuelScreens.js/AddRefuel';
import TypesofRefuel from '../screens/RefuelScreens.js/TypesofRefuel';
import AddRoute from '../screens/RouteScreen/AddRoute';
import AddIncome from '../screens/IncomeScreen/AddIncome';
import Reports from '../screens/ReportsScreen/Reports';
import SelectLoginScreen from '../screens/Authentication/SelectLoginScreen';
import LoginScreen from '../screens/Authentication/LoginScreen';
import OtpVerification from '../screens/Authentication/OtpVerification';
import RegistrationScreen from '../screens/Authentication/RegistrationScreen';
import ForgetPassword from '../screens/Authentication/ForgetPassword';
import SubscriptionScreen from '../screens/ProVersionScreen/SubscriptionScreen';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';

import Registration from '../screens/VehicalScreen/VehicalRegistration';
import VehicleList from '../screens/VehicalScreen/VehicalList'
import MoreOptions from '../screens/MoreOptions/MoreOptions';
import Fuel from '../screens/VehicalScreen/Fuel';
import { serviceType } from '../comman/const';
import ServiceType from '../screens/ServciesScreens/ServiceType';
import GasStation from '../screens/GasStation/GasStation';
import ExpenseType from '../screens/ExpenseScreen/ExpenseType';
import IncomeType from '../screens/IncomeScreen/IncomeType';
import Reasons from '../screens/ReasonScreen/Reasons';
import Contact from '../screens/Contact/Contact';
import Place from '../screens/PlaceScreen/Place';
import Profile from '../screens/Profile/Profile';
import Vehicle from '../screens/VehicalScreen/Vehicle';
import Driver from '../screens/Driver/Driver';
import DataSync from '../screens/Sync/DataSync';
import Reminder from '../screens/Reminder/Reminder';
import Setting from '../screens/Setting/Setting';
import Storage from '../screens/Storage/Storage';



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color, service } from '../comman/theme';
import { Styles } from '../comman/Styles';
import { PaddingBox } from '../comman/AlignBox';
import { BUTTOM, HOME, ICON, PROFILE, REPORT, SETTING } from '../comman/Images';
import VehicalRegistration from '../screens/VehicalScreen/VehicalRegistration';
import TypeOfvehicle from '../screens/VehicalScreen/TypeofVehicle';
import TypesofExpenses from '../screens/ExpenseScreens/TypesofExpenses';
import MyVehicleList from '../screens/Dashboard/MyVehicleList';
import MapScreen from '../screens/PlaceScreen/MapScreen';
import ReminderCalender from '../screens/Reminder/ReminderCalender';
import SearchPlace from '../screens/PlaceScreen/SearchPlace';
import ListOfExpense from '../screens/ExpenseScreens/ListOfExpense';
import ListOfService from '../screens/ServciesScreens/ListOfService';
import EditProfile from '../screens/Profile/EditProfile';


// import {createDrawerNavigator} from '@react-navigation/drawer';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// import { color } from '../component/theme';
// import {Styles} from '../component/Styles';
// import { PaddingBox } from '../component/AlignBox';



// activeTintColor: color.primary,
// inactiveTintColor: color.black,

function HomeStack() {
  return (
    <Tab.Navigator

      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#00000000",
          height: Platform.OS == "ios" ? 100 : 20,

        },
        tabBarShowLabel: false,
        headerShown: false,
        headerShadowVisible: false,
        headerBackgroundContainerStyle: {
          backgroundColor: color.black
        },


      }}
    // sceneContainerStyle={{backgroundColor:color.primary}}


    >
      <Tab.Screen
        name="Homes"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, size }) => (
            <View style={[styles.tabStyle, { borderTopLeftRadius: 40, height: 80 }]}>
              <Image
                source={HOME}
                style={{ width: 25, height: 25, tintColor: color.white }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Interest"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Interest',
          tabBarIcon: ({ focused, size }) => (
            <View style={[styles.tabStyle, { borderTopRightRadius: 40, }]}>
              <Image
                source={ICON}
                style={{ width: 25, height: 25, tintColor: color.white }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Slots"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Slots',
          tabBarButton: ({ focused, size }) => (
            <View style={{ width: 80, height: "100%", alignItems: "center", justifyContent: "space-between" }}>
              <TouchableOpacity style={{
                width: 70, height: 70,
                marginTop: -80
              }}
                onPress={() => alert("sd")}
              >
                <ActionButton sty buttonColor={service.primary}  >
                  <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                    <Image
                      source={HOME}
                      style={{ width: 20, height: 20, tintColor: color.white }}
                      resizeMode="contain"
                    />
                  </ActionButton.Item>
                  <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                    <Image
                      source={HOME}
                      style={{ width: 20, height: 20, tintColor: color.white }}
                      resizeMode="contain"
                    />
                  </ActionButton.Item>

                  <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                    <Image
                      source={HOME}
                      style={{ width: 20, height: 20, tintColor: color.white }}
                      resizeMode="contain"
                    />
                  </ActionButton.Item>

                  <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                    <Image
                      source={HOME}
                      style={{ width: 20, height: 20, tintColor: color.white }}
                      resizeMode="contain"
                    />
                  </ActionButton.Item>

                  <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                    <Image
                      source={HOME}
                      style={{ width: 20, height: 20, tintColor: color.white }}
                      resizeMode="contain"
                    />
                  </ActionButton.Item>


                </ActionButton>
              </TouchableOpacity>

              <View style={{ backgroundColor: service.primary, width: "100%", }}>
                <Image
                  source={BUTTOM}
                  style={{ width: Platform.OS == "ios" ? 110 : 150, height: Platform.OS == "ios" ? 58 : 30, right: Platform.OS == "ios" ? -15 : -34, bottom: 0, position: "absolute" }}
                // resizeMode="stretch"
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Slot"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Slot',
          tabBarIcon: ({ focused, size }) => (
            <View style={[styles.tabStyle, { borderTopLeftRadius: 40 }]}>
              <Image
                source={PROFILE}
                style={{ width: 25, height: 25, tintColor: color.white }}
                resizeMode="contain"

              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused, size }) => (
            <View style={[styles.tabStyle, { borderTopRightRadius: 40 }]}>
              <Image
                source={SETTING}
                style={{ width: 25, height: 25, tintColor: color.white }}
                resizeMode="contain"

              />

            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: service.primary,
    width: "100%",
    height: 80,
  },
  customStyle: {
    alignItems: 'center', justifyContent: 'center',
  },
  imageStyle1: { width: 20, height: 20, tintColor: color.navColor },
  imageStyle: { width: 20, height: 20, tintColor: color.dSecond },
  actionButtonIcon: {
    fontSize: 20 / PixelRatio.getFontScale(),
    height: 22,
    color: 'white',
    zIndex: 100,
  },
});


//     <Tab.Screen name="Pay" component={ShortList} options={{
//   tabBarButton: () => <TouchableOpacity    style={{width:60,borderWidth:10,borderColor:color.white, height:60, backgroundColor:color.black, borderRadius:30,zIndex:100, marginTop:-30}}>

//   </TouchableOpacity>,
// }} />
export const AppNavigator = props => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"SplashScreen"}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Vehicle" component={Vehicle} />
        <Stack.Screen name="SelectLoginScreen" component={SelectLoginScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddServices" component={AddServices} />
        <Stack.Screen name="TypesofServices" component={TypesofServices} />
        <Stack.Screen name="AddExpense" component={AddExpense} />
        <Stack.Screen name="Reason" component={Reason} />
        <Stack.Screen name="AddRefuel" component={AddRefuel} />
        <Stack.Screen name="TypesofRefuel" component={TypesofRefuel} />
        <Stack.Screen name="AddRoute" component={AddRoute} />
        <Stack.Screen name="AddIncome" component={AddIncome} />
        <Stack.Screen name="Reports" component={Reports} />
        <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="VehicalRegistration" component={VehicalRegistration} />
        <Stack.Screen name="vehicleList" component={VehicleList}/>
        <Stack.Screen name="moreOptions" component={MoreOptions}/>
        <Stack.Screen name='fuel' component={Fuel}/>
        <Stack.Screen name='gasStation' component={GasStation} />
        <Stack.Screen name='expenseType' component={ExpenseType} />
        <Stack.Screen name='incomeType' component={IncomeType} />
        <Stack.Screen name='reasons' component={Reasons} />
        <Stack.Screen name='contact' component={Contact} />
        <Stack.Screen name='place' component={Place} />
        <Stack.Screen name='profile' component={Profile} />
        <Stack.Screen name='Driver' component={Driver}/>
        <Stack.Screen name='dataSync' component={DataSync} />
        <Stack.Screen name='reminder' component={Reminder}/>
        <Stack.Screen name='setting' component={Setting}/>
        <Stack.Screen name='storage' component={Storage}/>
        <Stack.Screen name="typeOfVehicle" component={TypeOfvehicle} />
        <Stack.Screen name="TypesofExpenses" component={TypesofExpenses} />
        <Stack.Screen name="MyVehicleList" component={MyVehicleList} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="ReminderCalender" component={ReminderCalender} />
        <Stack.Screen name="SearchPlace" component={SearchPlace} />
        <Stack.Screen name="ListOfExpense" component={ListOfExpense} />
        <Stack.Screen name="ListOfService" component={ListOfService} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        {/* <Stack.Screen name="TypesofExpenses" component={TypesofExpenses} /> */}
        {/* <Stack.Screen name="TypesofExpenses" component={TypesofExpenses} /> */}
        {/* <Stack.Screen name="TypesofExpenses" component={TypesofExpenses} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
