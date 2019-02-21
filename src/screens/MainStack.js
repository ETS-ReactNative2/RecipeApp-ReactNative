import React from 'react';
import feed from "./views/Feed.js";
import settings from "./views/Settings.js";
import search from "./views/Search.js";
import Icon from "react-native-vector-icons/Ionicons";

import {createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";

const NavStack = createBottomTabNavigator({
    Feed: {
        screen: feed,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: ({tintColor}) => <Icon name="md-paper" size={35} color={tintColor}/>,
        }
    },
    Search: {
        screen: search,
        navigationOptions: {
            tabBarLabel: 'Search',
            tabBarIcon: ({tintColor}) => <Icon name="md-search" size={35} color={tintColor}/>,
        }
    },
    Settings: {
        screen: settings, navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({tintColor}) => <Icon name="md-settings" size={35} color={tintColor}/>,
        }
    }
});



const MainStack = createAppContainer(NavStack);

export default MainStack