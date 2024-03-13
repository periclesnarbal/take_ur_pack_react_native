import React from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

interface PhotoPreviewProps {
  visible: boolean;
  imageUri: string;
  onRequestClose: () => void;
  onRetakePress: () => void;
  onContinuePress: () => void;
}

const PhotoPreview: React.FC<PhotoPreviewProps> = ({
  visible,
  imageUri,
  onRequestClose,
  onRetakePress,
  onContinuePress,
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onRequestClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image source={{ uri: imageUri }} style={styles.image} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onRetakePress}>
              <Text style={styles.buttonTextL}>Tirar novamente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#7203FF' }]} onPress={onContinuePress}>
              <Text style={styles.buttonTextR}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    margin: 16,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 4,
    borderRadius: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    height: 48,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: 'gray'
  },
  buttonTextL: {
    color: '#2D0C57',
    fontSize: 16,
  },
  buttonTextR: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default PhotoPreview;
