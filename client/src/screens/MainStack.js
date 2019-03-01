import React from 'react';
import feed from "./views/Feed.js";
import settings from "./views/Settings.js";
import search from "./views/Search.js";
import shoppingList from "./views/ShoppingList"
import recipeDetails from "./views/RecipeDetails.js";
import Icon from "react-native-vector-icons/Ionicons";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import {createStackNavigator, createAppContainer} from "react-navigation";



const FeedStack = createStackNavigator({
    Home: {
        navigationOptions: {
            header: null
        },
        screen: feed
    },
    RecipeDetails: {screen: recipeDetails},
});

const BottomNavStack = createMaterialBottomTabNavigator(
    {
        Feed: {
            screen: FeedStack,
            navigationOptions: {
                tabBarLabel: 'Feed',
                tabBarIcon: ({tintColor}) => <Icon name="md-paper" size={28} color={tintColor}/>,
            }
        },
        Search: {
            screen: search,
            navigationOptions: {
                tabBarLabel: 'Search',
                tabBarIcon: ({tintColor}) => <Icon name="md-search" size={28} color={tintColor}/>,
            }
        },
        ShoppingList: {
            screen: shoppingList,
            navigationOptions: {
                tabBarLabel: 'Shopping List',
                tabBarIcon: ({tintColor}) => <Icon name="ios-basket" size={28} color={tintColor}/>,
            }
        },
        Settings: {
            screen: settings, navigationOptions: {
                tabBarLabel: 'Settings',
                tabBarIcon: ({tintColor}) => <Icon name="md-settings" size={28} color={tintColor}/>,
            }
        }

    },
    {
        initialRouteName: 'Feed',
        activeColor: '#fffbf6',
        inactiveColor: '#044C29',
        barStyle: {backgroundColor: '#96ED89'}
    }
);


const MainStack = createAppContainer(BottomNavStack);

export default MainStack