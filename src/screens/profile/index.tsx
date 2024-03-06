import { StyleSheet, View, Text } from "react-native";

function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You are at Profile screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "400",
  },
});

export default Profile;
