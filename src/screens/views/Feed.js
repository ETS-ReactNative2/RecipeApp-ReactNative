import React, {Component} from "react";
import {StyleSheet, View,} from "react-native";
import {connect} from "react-redux";
import {updateRecipes} from "../../store/actions/index";
import FeedTileFlatList from "../../components/FeedTileFlatList/FeedTileFlatList"
import axiosInstance from "../../axios";
import testData from "../../testData"

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

    render() {
        return (
            <View>
                <FeedTileFlatList recipe={this.props.recipes}/>
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
        ctr: state.values.counter,
        recipes: state.values.recipes,
        recipesLoaded: state.values.recipesLoaded
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateRecipes: (data) => dispatch(updateRecipes(data)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Feed);