import React from "react";
import {ListItem, List} from "react-native-elements"
import {StyleSheet, View} from "react-native";

const searchItem = (props) => {
    return (
        <View style={styles.container}>
            <ListItem
                leftAvatar={{source: {uri: props.recipe.image}}}
                title={props.recipe.title}
                subtitle={"Ready in " + props.recipe.readyInMinutes + " minutes."}

            />
            <View style={styles.separator}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignSelf: "center",
        width: "100%",
    },
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: "#CED0CE",
    }
});


export default searchItem;