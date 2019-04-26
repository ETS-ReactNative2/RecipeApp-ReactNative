import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import SideElement from "./SideElement/SideElement"

const SideElementScrollView = (props) => {
    const myElements = Object.keys(props.elements).map(function(key) {
        return <SideElement 
            amount={props.elements[key].amount + " " + props.elements[key].unit}
            key={[key]}
            name={props.elements[key].name}
            image={props.elements[key].image}
        />
    });

    return (
        <ScrollView horizontal={true} style={styles.container}>
            {myElements}
        </ScrollView>
    )
};

styles = StyleSheet.create({
    container:{
        //height: 500,
        width: "100%"
    },
});


export default SideElementScrollView;