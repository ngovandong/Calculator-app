import { StyleSheet, Text, TouchableOpacity } from "react-native";

function Button(props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: props.bc, flex: props.flex },
      ]}
      onPress={props.onPress}
    >
      <Text style={[styles.text]}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:8,
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
