import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Avatar} from 'react-native-elements';

const SideElement = (props) => {
    return (
        <View style={styles.container}>
            <Avatar
                rounded
                size="large"
                source={{uri: props.image}}
            />
            <Text style={styles.titleText}>{props.name}</Text>
            <Text style={styles.bottomText}>{props.amount}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F0F0F0",
        height: 150,
        width: 100,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center'
    },
    titleText: {
        color: 'black',
        fontSize: 15,
        marginTop: 2,
    },
    bottomText: {
        color: 'grey',
        fontSize: 10,
        marginTop: 2,
    }
});

export default SideElement;