import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity, Modal } from "react-native";
import { Camera, CameraCapturedPicture, CameraType } from "expo-camera";
import { View } from "react-native";

import PhotoPreview from "../../components/PhotoPreview";

function CameraScreen() {
  const camRef = useRef<Camera | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [capturedPhoto, setCapturedPhoto] = useState<CameraCapturedPicture | undefined>(undefined);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    console.log("aguardando permissão...");
  }

  if (hasPermission === false) {
    console.log("acesso a camera negado");
    return;
  }

  async function takePicture() {
    if(camRef){
      const data = await camRef.current?.takePictureAsync();
      setCapturedPhoto(data);
      setOpen(true);
    }
  }

  const closeModal = () => {
    setOpen(false);
    setCapturedPhoto(undefined);
  };

  const handleRetakePress = () => {
    closeModal();
  };

  const handleContinuePress = () => {
    console.log('seguir para proxima tela')
  };

  return (
    <SafeAreaView style={styles.container}>
      <Camera
      style={styles.camera} 
      type={CameraType.back}
      ref={camRef} />
      <View style={styles.overlay}></View>
      <View style={styles.button_container}>
        <View style={styles.button_camera}>
          <TouchableOpacity
            style={styles.inner_button_camera}
            onPress={takePicture}
          ></TouchableOpacity>
        </View>
      </View>

      { capturedPhoto?.uri && 
      <PhotoPreview
      visible={open}
      imageUri={capturedPhoto.uri}
      onRequestClose={closeModal}
      onRetakePress={handleRetakePress}
      onContinuePress={handleContinuePress}>
      </PhotoPreview>
      }

    </SafeAreaView>
  );
}

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
  },
  button_container: {
    position: "absolute",
    bottom: "15%",
    width: "100%",
    alignItems: "center",
  },
  button_camera: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  inner_button_camera: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 2.5,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    height: "30%",
  }
});
