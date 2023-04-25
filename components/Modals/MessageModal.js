import {Modal, Pressable} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BigText from '../Texts/BigText';
import RegularText from '../Texts/RegularText';
import RegularButton from '../Button/RegularButton';
const {primary, black, success, fail, tertiary} = colors;
export const ModalPressableContainer = styled.Pressable`
  flex: 1;
  padding: 25px;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View`
  background-color: ${primary};
  border-radius: 20px;
  width: 100%;
  padding: 35px;
  align-items: center;
  elevation: 5;
  shadow-color: ${black};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
`;
const MessageModal = ({
  modalVisible,
  buttonHandler,
  type,
  headerText,
  message,
  buttonText,
}) => {
  return (
    <Modal animationType="slide" visible={modalVisible} transparent={true}>
      <ModalPressableContainer onPress={buttonHandler}>
        <ModalView>
          <Icon
            name={type === 'success' ? 'check-circle' : 'close-circle'}
            color={type === 'success' ? success : fail}
            size={100}
          />
          <BigText style={{fontSize: 25, color: tertiary, marginVertical: 10}}>
            {headerText}
          </BigText>
          <RegularText style={{marginBottom: 20}}>{message}</RegularText>
          <RegularButton onPress={buttonHandler}>
            {buttonText || 'Compelte'}
          </RegularButton>
        </ModalView>
      </ModalPressableContainer>
    </Modal>
  );
};

export default MessageModal;
