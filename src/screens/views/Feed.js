import React, {Component} from "react";
import {StyleSheet, Text, View, Button, TouchableOpacity, ScrollView} from "react-native";
import {List, ListItem} from 'react-native-elements'
import Icon from "react-native-vector-icons/Ionicons";
import {connect} from "react-redux";
import {addNumber, removeNumber} from "../../store/actions";
import FeedTiles from "../../components/FeedTiles/FeedTiles";
class Feed extends Component {

    constructor(props) {
        super(props);
    }

    onAddHandler = (number) => {
        this.props.onAddNumber(number)
    };

    onRemoveHandler = (number) => {
        this.props.onRemoveNumber(number)
    };

    render() {
        return (

            <View>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text>{this.props.ctr}</Text>
                <Button title="addNumber" onPress={() => this.onAddHandler(2)}/>
                <Button title="removeNumber" onPress={() => this.onRemoveHandler(2)}/>
                <TouchableOpacity>
                    <Icon size={30} name="ios-trash" color="green"/>
                </TouchableOpacity>
            </View>
        )
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


export default connect(mapStateToProps, mapDispatchToProps)(Feed);