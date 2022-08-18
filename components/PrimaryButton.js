import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = (props) => {
  return (
    <View style={style.buttonOutterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [style.buttonInnerContainer, style.pressed]
            : style.buttonInnerContainer
        }
        onPress={props.onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={style.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const style = StyleSheet.create({
  buttonOutterContainer: {
    backgroundColor: "#72063c",
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  // ios effect
  pressed: {
    opacity: 0.75,
  },
});
