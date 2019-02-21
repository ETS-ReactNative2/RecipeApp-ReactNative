/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import {addNumber, removeNumber} from "./src/store/actions/index";
import MainStack from "./src/screens/MainStack";

class App extends Component {

    render() {
        return (
            <MainStack/>
        );
    }
}

export default App;