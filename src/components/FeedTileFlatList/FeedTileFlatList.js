import {FlatList} from "react-native";
import FeedTile from "./FeedTile/FeedTile"

import React from "react";

const feedTileFlatList = (props) => {
    return (
        <FlatList
            data={props.recipe}
            renderItem={({item}) =>
                <FeedTile
                    title={item.title}
                    image={"https://spoonacular.com/recipeImages/" + item.image}
                    key={item.id}
                />
            }
        />
    )
};

export default feedTileFlatList;