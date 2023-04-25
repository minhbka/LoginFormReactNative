import {Modal, ActivityIndicator} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BigText from '../Texts/BigText';
import RegularButton from '../Button/RegularButton';
import {ModalView, ModalPressableContainer} from './MessageModal';
const {primary, tertiary, accent, secondary} = colors;
const StyledView = styled.View`
  background-color: ${primary};
  flex-direction: column;
  height: 65px;
  width: 65px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: ${secondary};
`;
const ProfileModal = ({
  modalVisible,
  buttonHandler,
  headerText,
  loggingOut,
  hideModal,
}) => {
  return (
    <Modal animationType="slide" visible={modalVisible} transparent={true}>
      <ModalPressableContainer onPress={hideModal}>
        <ModalView>
          <StyledView>
            <Icon name="account" color={accent} size={55} />
          </StyledView>

          <BigText style={{fontSize: 25, color: tertiary, marginVertical: 20}}>
            {headerText}
          </BigText>
          {!loggingOut && (
            <RegularButton onPress={buttonHandler}>Logout</RegularButton>
          )}
          {loggingOut && (
            <RegularButton disabled={true}>
              <ActivityIndicator size="small" color={primary} />
            </RegularButton>
          )}
        </ModalView>
      </ModalPressableContainer>
    </Modal>
  );
};

export default ProfileModal;
