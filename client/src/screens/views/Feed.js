import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import {connect} from "react-redux";
import {updateRecipes, selectRecipe} from "../../store/actions/index";
import FeedTileFlatList from "../../components/FeedTileFlatList/FeedTileFlatList";
import ReceptDetails from "../../components/ReceptDetails/RecipeDetails";
import axiosInstance from "../../axios";
import testData from "../../testData";
import testRecept from "../../testRecept";

class Feed extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        //axiosInstance.get("/recipes/search").then(response => {
        //      this.onUpdateHandler(response.data.results);
        //});
        this.onUpdateHandler(testData);
    }

    onUpdateHandler = (response) => {
        this.props.onUpdateRecipes(response);
    };

    onTileClickHandler = (event) => {
        this.props.onSelectRecipe(event.target);
        this.props.navigation.navigate('RecipeDetails')
    };


    render() {
        let feedTiles;

        if (this.props.recipeSelected === "x") {
            feedTiles = <ReceptDetails recipeDetails={testRecept}/>
        }
        else {
            feedTiles = <FeedTileFlatList
                onClick={this.onTileClickHandler}
                recipe={this.props.recipes}
            />
        }
        return (
            <View>
                {feedTiles}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const mapStateToProps = state => {
    return {
        recipes: state.values.recipes,
        recipesLoaded: state.values.recipesLoaded,
        recipeSelected: state.values.recipeSelected
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateRecipes: (data) => dispatch(updateRecipes(data)),
        onSelectRecipe: (recipe) => dispatch(selectRecipe(recipe))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Feed);