import {FlatList, StyleSheet} from "react-native";
import FeedTile from "./FeedTile/FeedTile"

import React from "react";

const feedTileFlatList = (props) => {
    return (
        <FlatList
            style={styles.container}
            data={props.recipe}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) =>
                <FeedTile
                    onClick={props.onClick}
                    title={item.title}
                    image={item.image}
                    tags={item.categories}
                />
            }
        />
    )
};

const styles = StyleSheet.create({
    container: {
        //backgroundColor: "#000000"
    }
});

export default feedTileFlatList;