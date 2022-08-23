import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

export default function Card({ children }) {
  return <View style={styles.cardContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 36,
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
});
