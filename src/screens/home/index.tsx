import { View, Image, StyleSheet } from "react-native";
import StyledText from "../../components/StyledText";

function Home() {
  return (
    <View style={styles.container}>
      <StyledText title='Toque no botão "Acionar Câmera" e aponte a câmera traseira do seu celular para a parte superior do pacote, onde estão as informações necessárias para o reconhecimento.' style={styles.text} />
      <Image
        source={require("../../../assets/images/box-camera-frame.png")}
        style={styles.image}
      />
      <StyledText title="Quando encontrar um bom enquadramento tire uma foto e aguarde a validação." style={styles.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: 20,
    color: "#2D0C57",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default Home;
