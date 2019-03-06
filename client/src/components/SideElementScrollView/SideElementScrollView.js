import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import SideElement from "./SideElement/SideElement"

const SideElementScrollView = (props) => {

    //const myElements =Object.keys(props.elements).map(function(key) {
    //    return <SideElement key={key} amount={props.elements[key]} name={[key]}/>
    //});
    const myElements = Object.keys(props.elements).map(function(key) {
        return <SideElement 
            amount={props.elements[key].amount + " " + props.elements[key].unit}
            key={[key]}
            name={props.elements[key].name}
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