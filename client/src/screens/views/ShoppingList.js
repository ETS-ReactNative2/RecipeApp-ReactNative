import React, {Component} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import ShoppingListItem from "../../components/ShoppingList/ShoppingListItem/ShoppingListItem"
import {connect} from "react-redux";
import {addShoppingListItem, removeShoppingListItem, archiveShoppingListItem} from "../../store/actions/index";
import ShoppingListHeader from "../../components/ShoppingList/ShoppingListHeader/ShoppingListHeader";
import ShoppingListFooter from "../../components/ShoppingList/ShoppingListFooter/ShoppingListFooter";

class ShoppingList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.container}
                    data={this.props.shoppingList}
                    renderItem={({item}) => {
                        if (!item.archived) {
                            return <ShoppingListItem
                                name={item.name}
                                onPress={() => this.props.onArchiveShoppingListItem(item)}
                                checked={false}/>
                        }
                    }}
                    //keyExtractor={recipeObject => recipeObject.id.toString()}
                    ListHeaderComponent={
                        <ShoppingListHeader
                            onButtonPress={this.props.onAddShoppingListItem}/>}
                    ListFooterComponent={
                        <ShoppingListFooter
                            shoppingList={this.props.shoppingList}
                            onCheckBoxPress={this.props.onArchiveShoppingListItem}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignSelf: "center",
        width: "100%",
    }
});

const mapStateToProps = state => {
    return {
        shoppingList: state.values.shoppingList,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddShoppingListItem: (item) => dispatch(addShoppingListItem(item)),
        onArchiveShoppingListItem: (item) => dispatch(archiveShoppingListItem(item)),
        onRemoveShoppingListItem: (item) => dispatch(removeShoppingListItem(item))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);