import React, {useState} from 'react';
import MainContainer from '../components/Containers/MainContainer';

import KeyboardAvoidingContainer from '../components/Containers/KeyboardAvoidingContainer';
import RegularText from '../components/Texts/RegularText';
import StyledTextInput from '../components/Inputs/StyledTextInput';
import MsgBox from '../components/Texts/MsgBox';
import RegularButton from '../components/Button/RegularButton';
import {ActivityIndicator} from 'react-native';
import {colors} from '../components/colors';
import PressableText from '../components/Texts/PressableText';
import RowContainer from '../components/Containers/RowContainer';
import IconHeader from '../components/Icons/IconHeader';
import StyledCodeInput from '../components/Inputs/StyledCodeInput';
import ResendTimer from '../components/Timers/ResendTimer';
import MessageModal from '../components/Modals/MessageModal';
const {primary, secondary, lightGray} = colors;

const EmailVerification = ({navigation}) => {
  const MAX_CODE_LENGTH = 4;
  const [code, setCode] = useState('');
  const [pinReady, setPinReady] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [activeResend, setActiveResend] = useState(false);
  const [resendStatus, setResendStatus] = useState('Resend');
  const [resendingEmail, setResendingEmail] = useState(false);
  //modal
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessageType, setModalMessageType] = useState('');
  const [headerText, setHeaderText] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const moveTo = (screen, payload) => {
    navigation.navigate(screen, {...payload});
  };
  const buttonHandler = () => {
    if (modalMessageType === 'success') {
      moveTo('Dashboard');
    }
    setModalVisible(false);
  };

  const showModal = (type, headerText, message, buttonText) => {
    setModalMessageType(type);
    setHeaderText(headerText);
    setButtonText(buttonText);
    setModalMessage(message);
    setModalVisible(true);
  };
  const resendEmail = async triggerTimer => {
    try {
      setResendingEmail(true);
      // make request to backend
      //update setResendStattus() to 'Failed!' or 'Sent!'
      setResendingEmail(false);

      // hold on
      setTimeout(() => {
        setResendStatus('Resend');
        setActiveResend(false);
        triggerTimer();
      }, 5000);
    } catch (error) {
      setResendStatus('Failed!');
      setResendingEmail(false);
      alert('email resend failed: ' + error.message);
    }
  };
  const handleEmailVerification = async () => {
    try {
      //setMessage(null);

      setVerifying(true);
      // call backend
      setVerifying(false);
      return showModal(
        'success',
        'All Good!',
        'Your email has been verified.',
        'Proceed',
      );
      //setSubmitting(false);
    } catch (error) {
      // setMessage('Login failed: ', error.message);
      // setVerifying(false);
      setVerifying(false);
      return showModal('failed', 'Failed!', error.message, 'Close');
    }
  };
  return (
    <MainContainer>
      <KeyboardAvoidingContainer>
        <IconHeader name="lock-open" style={{marginBottom: 30}} />
        <RegularText style={{textAlign: 'center'}}>
          Enter the 4-digit code to your email
        </RegularText>
        <StyledCodeInput
          maxLength={MAX_CODE_LENGTH}
          code={code}
          setCode={setCode}
          setPinReady={setPinReady}
        />
        {!verifying && pinReady && (
          <RegularButton onPress={handleEmailVerification}>
            Verify
          </RegularButton>
        )}
        {!verifying && !pinReady && (
          <RegularButton
            disabled={true}
            style={{backgroundColor: secondary}}
            textStyle={{color: lightGray}}>
            Verify
          </RegularButton>
        )}
        {verifying && (
          <RegularButton disabled={true}>
            <ActivityIndicator size="small" color={primary}></ActivityIndicator>
          </RegularButton>
        )}
        <ResendTimer
          activeResend={activeResend}
          setActiveResend={setActiveResend}
          resendStatus={resendStatus}
          resendingEmail={resendingEmail}
          resendEmail={resendEmail}
        />
        <MessageModal
          modalVisible={modalVisible}
          buttonHandler={buttonHandler}
          type={modalMessageType}
          headerText={headerText}
          buttonText={buttonText}
          message={modalMessage}
        />
      </KeyboardAvoidingContainer>
    </MainContainer>
  );
};

export default EmailVerification;
