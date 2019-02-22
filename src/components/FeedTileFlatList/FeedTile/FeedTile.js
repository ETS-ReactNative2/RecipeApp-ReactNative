import React from "react";
import {StyleSheet, View, Text, ImageBackground} from "react-native";

const FeedTile = (props) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{uri: props.image}}
                style={{
                    width: '100%',
                    height: '100%'
                }}>
                <Text style={styles.text}>{props.title}</Text>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "100%",
        height: 100,
        marginTop: 0,
        //backgroundColor: 'steelblue',
        minHeight: "20%",
        overflow: 'hidden'
    },
    image: {},
    text: {
        paddingLeft:15,
        paddingTop:15,
        fontSize: 25,
        letterSpacing: 2,
        color: "#000000",
        fontWeight: "400",
        textShadowColor: 'rgba(255, 255, 255, 0.75)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 10

    },
    underText: {}
});

export default FeedTile;