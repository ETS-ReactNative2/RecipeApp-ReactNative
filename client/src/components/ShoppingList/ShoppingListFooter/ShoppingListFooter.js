import React from "react";
import {Text, FlatList, View, StyleSheet} from "react-native";
//import ShoppingListItem from "../ShoppingListItem/ShoppingListItem"
import ArchiveListItem from "../ArchiveListItem/ArchiveListItem";

const shoppingListFooter = (props) => {
    return (
        <View>
            <FlatList
                data={props.shoppingList}
                ListHeaderComponent={<Text>Archived</Text>}
                renderItem={({item}) => {
                    if (item.archived) {
                        return <ArchiveListItem
                            name={item.name}
                            onPress={() => props.onCheckBoxPress(item)}
                            checked={true}
                        />
                    }
                }}
                //keyExtractor={item => item.index.toString()}
            />
        </View>
    )
};
export default shoppingListFooter;