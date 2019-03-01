import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const tag = (props) => {
    return (
            <TouchableOpacity>
                <View style={styles.tagContainer}>
                    <Text style={styles.tagsText}>{props.tag}</Text>
                </View>
            </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    tagContainer: {
        margin: 2,
        borderRadius: 16,
        backgroundColor:  "#f4f4f4" ,// "#43B9E8",
        height: 30
    },
    tagsText: {
        color: "#7f8082",
        top: 3,
        paddingLeft: 7,
        paddingRight: 7,
        fontSize: 15,
        letterSpacing: 1,
    },
});

export default tag;