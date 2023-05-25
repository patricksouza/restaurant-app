import React, {useState} from 'react';
import {Alert, Modal, Text, Pressable, View} from 'react-native';
import {ModalGenericProps} from '../../../utils/types';
import STYLES from './styles';

const ModalGeneric: React.FunctionComponent<ModalGenericProps> = props => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={STYLES.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={STYLES.centeredView}>
          <View style={STYLES.modalView}>
            <Text style={STYLES.modalText}>Hello World!</Text>
            <Pressable
              style={[STYLES.button, STYLES.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={STYLES.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[STYLES.button, STYLES.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={STYLES.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

export default ModalGeneric;
