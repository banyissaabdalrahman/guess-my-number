import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default function InstructionText({ children, style }) {
  return <Text style={[style, styles.instructionText]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: Colors.accent500,
    marginBottom: 12,
  },
});
