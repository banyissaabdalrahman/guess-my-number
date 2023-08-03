import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import ButtonsStyles from "../constants/ButtonsStyles";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

import { Ionicons } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver, onRoundsCount }) {
  const initalGuess = generateRandomBetween(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initalGuess);
  const [logRounds, setLogRounds] = useState([initalGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const { width, height } = useWindowDimensions();

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert(`Don't lie!`, `You know that this is wrong`, [
        {
          text: "SORRY!",
          style: "cancel",
        },
      ]);

      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
      onRoundsCount((currentRound) => currentRound + 1);
    } else {
      minBoundary = currentGuess + 1;
      onRoundsCount((currentRound) => currentRound + 1);
    }

    const newGuess = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newGuess);
    setLogRounds((current) => [newGuess, ...current]);
  }

  const guessRoundsListLength = logRounds.length;

  const marginTopDistance = height < 400 ? 30 : 100;

  let contnet = (
    <View style={[styles.screen, { marginTop: marginTopDistance }]}>
      <Title>Opponent's Guess</Title>

      <View style={styles.landscapeButtonsStyles}>
        <View style={ButtonsStyles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="md-add" size={24} color="#fff" />
          </PrimaryButton>
        </View>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={ButtonsStyles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={24} color="#fff" />
          </PrimaryButton>
        </View>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={logRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );

  if (width < 500) {
    contnet = (
      <View style={[styles.screen, { marginTop: marginTopDistance }]}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <InstructionText>Higher or lower?</InstructionText>
          <View style={ButtonsStyles.buttonsContainer}>
            <View style={ButtonsStyles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                <Ionicons name="md-add" size={24} color="#fff" />
              </PrimaryButton>
            </View>
            <View style={ButtonsStyles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                <Ionicons name="md-remove" size={24} color="#fff" />
              </PrimaryButton>
            </View>
          </View>
        </Card>
        <View style={styles.listContainer}>
          <FlatList
            data={logRounds}
            renderItem={(itemData) => (
              <GuessLogItem
                roundNumber={guessRoundsListLength - itemData.index}
                guess={itemData.item}
              />
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    );
  }

  return <>{contnet}</>;
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  landscapeButtonsStyles: { flexDirection: "row", alignItems: "center" },
});
