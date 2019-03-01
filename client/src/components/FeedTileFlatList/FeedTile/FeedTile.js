import React from "react";
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity} from "react-native";
import Tags from "../../../components/Tags/Tags"
const FeedTile = (props) => {
    return (
        <TouchableOpacity onPress={props.onClick}>
            <View style={styles.container}>
                <ImageBackground
                    source={{uri: props.image}}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>{props.title}</Text>
                    </View>
                    <Tags tags={["pork", "pork again"]}/>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
        container: {
            borderRadius: 5,
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-start",
            width: "95%",
            height: 200,
            marginTop: 5,
            marginLeft: "2.5%",
            minHeight: "20%",
            overflow: 'hidden'
        },
        titleContainer: {
            top: 10,
            position: "absolute",
            backgroundColor: 'rgba(255,255,255,0.8)',
        },
        titleText: {
            paddingLeft: 15,
            paddingTop: 0,
            paddingRight: 15,
            fontSize: 20,
            color: "#000000",
            fontWeight: "400",
        },
    })
;

export default FeedTile;