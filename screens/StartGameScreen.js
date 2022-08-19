import { StyleSheet, View, TextInput } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = (props) => {
  const [input, setInput] = useState("");
  const changeInputHandler = (i) => {
    setInput(i);
  };
  const confirmHandler = () => {
    if (input.length === 0) {
      return;
    }
    console.log(input);
  };
  const resetHandler = () => {
    setInput("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={changeInputHandler}
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={input}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    backgroundColor: "#4e0329",
    borderRadius: 8,

    // andriod box-shadow styling
    elevation: 5,

    // ios box-shadow styling
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 8,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
