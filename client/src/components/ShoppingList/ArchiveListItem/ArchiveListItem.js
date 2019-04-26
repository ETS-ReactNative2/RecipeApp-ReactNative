import React from "react";
import {View} from "react-native";
import {CheckBox} from "react-native-elements";
const archiveListItem = (props) => {
    return(
        <View>
            <CheckBox
                checked={props.checked}
                onPress={props.onPress}
                title={props.name}
            />
        </View>
    )
};

export default archiveListItem;