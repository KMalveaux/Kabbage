import { Pressable, Text, StyleSheet } from "react-native";

function MyPressable({ disabled, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) =>
        disabled
          ? styles.disabledButton
          : pressed
          ? styles.pressedDown
          : styles.enabledButton
      }
    >
      <Text>Enter</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  enabledButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "brown",
    opacity: 1,
  },
  disabledButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "brown",
    opacity: 0.3,
  },
  pressedDown: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "brown",
    opacity: 0.5,
  },
});
{
  /* TODO: The 'elevation' under the styling above is specific to android and needs to be adjust for corss-platform compatibility later */
}

export default MyPressable;
