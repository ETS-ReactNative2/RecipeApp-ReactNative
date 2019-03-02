import React from "react";
import {Image, Text, View, ScrollView, StyleSheet} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import {Avatar, Divider} from 'react-native-elements';
import Tags from "./../Tags/Tags"
import SideElementScrollView from "../SideElementScrollView/SideElementScrollView";
//import SideElementScrollView
const recipeDetails = (props) => {
    return (
        <View style={{backgroundColor: "white"}}>
            <ScrollView>
                <View>
                    <Image style={styles.image}
                           source={{uri: "https://spoonacular.com/recipeImages/kale-pineapple-smoothie-837136.jpg"}}/>
                </View>
                <View style={{alignItems: 'center'}}>
                    <View style={styles.bottomContainer}>

                        <View style={{flex: 1}}>
                            <Text style={styles.title}>Melt In Your Mouth Kale Salad</Text>
                            <View style={styles.timeCalorieContainer}>
                                <Text>30 min</Text>
                                <Icon style={{paddingLeft: 5, paddingRight: 5}} name="circle" size={5}/>
                                <Text>520 calories per serving</Text>
                            </View>
                            <View style={styles.tagsContainer}>
                                <Tags tags={["tag1", "tag2"]}/>
                            </View>
                            <View style={styles.dividerContainer}>
                                <Divider/>
                            </View>
                            <View style={styles.creatorContainer}>
                                <Avatar
                                    rounded
                                    size="large"
                                    source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
                                />
                                <Text> Created by </Text>
                                <Text style={styles.creatorName}>@user</Text>
                                <Icon style={styles.creatorContainerArrow} name="chevron-right" size={20}/>
                            </View>
                            <View style={styles.dividerContainer}>
                                <Divider/>
                            </View>
                            <Text style={styles.subTitle}>Nutrition information</Text>
                            <View style={styles.proteinsContainer}>
                                <View style={styles.singleProteinContainer}>
                                    <Text style={styles.proteinText}>Protein</Text>
                                    <Text style={styles.proteinValue}>105 g</Text>
                                </View>
                                <View style={styles.singleProteinContainer}>
                                    <Text style={styles.proteinText}>Fat</Text>
                                    <Text style={styles.proteinValue}>40 g</Text>
                                </View>
                                <View style={styles.singleProteinContainer}>
                                    <Text style={styles.proteinText}>Net Carbs</Text>
                                    <Text style={styles.proteinValue}>60 g</Text>
                                </View>
                            </View>
                            <View style={styles.dividerContainer}>
                                <Divider/>
                            </View>
                            <Text style={styles.subTitle}>Ingredients</Text>
                            {/*<Text>{props.recipeDetails.text}</Text>*/}
                        </View>
                    </View>
                    <SideElementScrollView elements={{
                        "Black pepper": "2 tsk",
                        "Fries": "1 kg",
                        "Salt": "1 tsk",
                        "Sugar": "1 mg",
                        "Ham": "4 tsk"
                    }}/>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.subTitle}>Kitchen tools</Text>
                    </View>
                    <SideElementScrollView elements={{
                        "Black pepper": "2 tsk",
                        "Fries": "1 kg",
                        "Salt": "1 tsk",
                        "Sugar": "1 mg",
                        "Ham": "4 tsk"
                    }}/>

                </View>
            </ScrollView>
        </View>
    )
};

styles = StyleSheet.create({
    title: {
        textAlign: "left",
        color: 'black',
        fontSize: 25,
        marginTop: 10,
    },
    timeCalorieContainer: {
        fontSize: 15,
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: "center",

    },
    image: {
        zIndex: 100,
        height: 300,
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    dividerContainer: {
        padding: 10,
        paddingBottom: 10
    },
    tagsContainer: {
        height: 60,
        width: "100%"
    },
    creatorContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    creatorContainerArrow: {
        justifyContent: 'flex-end',
    },
    creatorName: {
        fontWeight: 'bold'
    },
    subTitle: {
        color: 'black',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10
    },
    proteinsContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: 'center'
    },
    singleProteinContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: 'center'
    },
    proteinText: {
        color: 'grey',
        fontSize: 20,
        marginTop: 10,
    },
    proteinValue: {
        fontSize: 20,
        color: "black",
    },
    bottomContainer: {
        alignItems: "center",
        width: "90%",
        borderTopLeftRadius: 200,
        borderTopRightRadius: 200,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "flex-start",
    }
});

export default recipeDetails;