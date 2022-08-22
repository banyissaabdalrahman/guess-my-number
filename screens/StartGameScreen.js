import { useState } from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (enteredNumber.length === 0) {
      Alert.alert("Invalid input", "Empty input is rejected!", [
        { text: "okay", onPress: resetInputHandler },
      ]);
      return;
    }

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99",
        [{ text: "okay", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(enteredNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={numberInputHandler}
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    backgroundColor: Colors.primary800,
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
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
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
