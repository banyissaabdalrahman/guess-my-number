import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    color: Colors.light,
    fontSize: 24,
    fontWeight: "bold",
    padding: 12,
    borderWidth: 2,
    borderColor: Colors.light,
    textAlign: "center",
  },
});
