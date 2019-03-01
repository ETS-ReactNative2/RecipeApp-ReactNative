import React from "react";
import {StyleSheet, View} from "react-native";
import Tag from "./Tag/Tag";

const Tags = (props) => {
    const myTags = props.tags.map(function (tag) {
        return <Tag tag={tag} />
    });
    return (
        <View style={styles.tagsContainer}>
            {myTags}
        </View>
    )
};

const styles = StyleSheet.create({
    tagsContainer: {
        position: "absolute",
        bottom: 10,
        marginLeft: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-start'
    }
});

export default Tags;