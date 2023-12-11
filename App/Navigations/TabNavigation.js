import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/Home";
import FavScreen from "../Screens/Fav";
import ProfileScreen from "../Screens/Profile";
import SearchScreen from "../Screens/Search";

const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
  return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name='home' component={HomeScreen} />
            <Tab.Screen name='profile' component={ProfileScreen} />
            <Tab.Screen name='search' component={SearchScreen} />
            <Tab.Screen name='fav' component={FavScreen} />
        </Tab.Navigator>
  )
}

export default TabNavigation
