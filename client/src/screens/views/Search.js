import React, {Component} from "react";
import {View, FlatList, StyleSheet} from "react-native";
import {SearchBar} from "react-native-elements";
import SearchItem from "../../components/SearchItem/SearchItem";
import {connect} from "react-redux";

class Search extends Component {
    constructor(props){
        super(props);
    }

    onSearchInputTextChange = (input) => {
        //Take a copy of the state
    };

    render() {
        return (
            <View style={styles.container}>
                {console.log(this.props.recipes)}
                <FlatList
                    data={this.props.recipes}
                    renderItem={({item}) => (
                        <SearchItem recipe={item}/>
                    )}
                    keyExtractor={recipeObject => recipeObject.id.toString()}
                    ListHeaderComponent={
                        <SearchBar
                            onChangeText={this.onSearchInputTextChange}
                            placeholder="Search"
                            lightTheme
                            round
                        />
                    }
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
        recipes: state.values.recipes,
    };
};

const mapDispatchToProps = dispatch => {
    return {
//
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Search);