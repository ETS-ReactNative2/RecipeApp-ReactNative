import React from "react";
import {View, Button} from "react-native"
import {Input} from "react-native-elements"
class ShoppingListHeader extends React.Component {
    state = {text: ""};

    render() {
        return (
            <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                <View style={{width: "80%"}}>
                    <Input
                        value={this.state.text}
                        placeholder={"Add item"}
                        maxLength={40}
                        onSubmitEditing={() => this.props.onButtonPress(this.state.text)}
                        onChangeText={(text) => this.setState({text})}

                    />
                </View>
                <View style={{width: "18%"}}>
                    <Button
                        title="Add"
                        onPress={() => this.props.onButtonPress(this.state.text)}
                    />
                </View>
            </View>
        );
    }
}

export default ShoppingListHeader;