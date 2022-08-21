import { Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: "#ddb52f",
    fontSize: 24,
    fontWeight: "bold",
    padding: 12,
    borderWidth: 2,
    borderColor: "#ddb52f",
    textAlign: "center",
  },
});
