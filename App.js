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
import Icon from "react-native-vector-icons/Ionicons";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class App extends Component {
    onAddHandler = (number) => {
        this.props.onAddNumber(number)
    };

    onRemoveHandler = (number) => {
        this.props.onRemoveNumber(number)
    };


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text>{this.props.ctr}</Text>
                <Button title="addNumber" onPress={() => this.onAddHandler(2)} />
                <Button title="removeNumber" onPress={() => this.onRemoveHandler(2)} />
                <TouchableOpacity>
                    <Icon size={30} name="ios-trash" color="green"/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const mapStateToProps = state => {
    return {
        ctr: state.values.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddNumber: (value) => dispatch(addNumber(value)),
        onRemoveNumber: (value) => dispatch(removeNumber(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);