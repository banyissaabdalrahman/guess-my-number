import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: Colors.light,
    fontSize: 24,
    fontWeight: "bold",
    padding: 12,
    borderWidth: 2,
    borderColor: Colors.light,
    textAlign: "center",
  },
});
