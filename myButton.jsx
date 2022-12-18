import React from "react";
import { TouchableOpacity } from "react-native";

class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false,
    };
  }

  render() {
    return (
      <TouchableOpacity
        style={{
          alignSelf: "center",
          height: "20%",
          width: "50%",
          backgroundColor: "#398640",
          justifyContent: "center",
          borderRadius: 30,
          marginTop: 20,
          elevation: 5,
        }}
        disabled={this.state.isDisabled}
      >
        <Text style={{ alignSelf: "center", fontSize: 40, fontWeight: "500" }}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }

  handleCorrectFunction() {
    this.setState({ isDisabled: true });
  }
}

export default MyButton;
