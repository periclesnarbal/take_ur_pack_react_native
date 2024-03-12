import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Camera, CameraType } from "expo-camera";

function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    console.log("erro de permissao de acesso a camera desconhecido");
    return
  }

  if (hasPermission === false) {
    console.log("acesso a camera negado");
    return
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={type} />
    </SafeAreaView>
  );
}

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
});
