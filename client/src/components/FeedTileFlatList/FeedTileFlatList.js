import {FlatList, StyleSheet} from "react-native";
import FeedTile from "./FeedTile/FeedTile"

import React from "react";

const feedTileFlatList = (props) => {
    return (
        <FlatList
            style={styles.container}
            data={props.recipe}
            renderItem={({item}) =>
                <FeedTile
                    onClick={props.onClick}
                    title={item.title}
                    image={"https://spoonacular.com/recipeImages/" + item.image}
                    key={item.id}
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