import React from "react";
import RecipeDetailsComponent from "../../components/ReceptDetails/RecipeDetails"
import {connect} from "react-redux";

class RecipeDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RecipeDetailsComponent recipe={this.props.recipeSelected}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipes: state.values.recipes,
        recipeSelected: state.values.recipeSelected
    };
};

const mapDispatchToProps = dispatch => {
    return {
//
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);