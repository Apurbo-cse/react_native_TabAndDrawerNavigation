// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import Dashboard from '../Screens/Dashboard/Dashboard'
import MainNavigationString from '../Constants/MainNavigationString';
// import Login from '../Screens/Auth/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import DashboardStack from './DashboardStack/DashboardStack';



const Tab = createBottomTabNavigator();
console.log('this is route page')
function TabRoutes() {
    return (

        <Tab.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name={MainNavigationString.DASHBORD} component={DashboardStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Icon name="home" size={20} color="red" />
                        )
                    }
                }}
            />

        </Tab.Navigator>

    );
}

export default TabRoutes;