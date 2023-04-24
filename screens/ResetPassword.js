import React, {useState} from 'react';
import MainContainer from '../components/Containers/MainContainer';
import KeyboardAvoidingContainer from '../components/Containers/KeyboardAvoidingContainer';
import RegularText from '../components/Texts/RegularText';
import StyledTextInput from '../components/Inputs/StyledTextInput';
import MsgBox from '../components/Texts/MsgBox';
import RegularButton from '../components/Button/RegularButton';
import {ActivityIndicator} from 'react-native';
import {Formik} from 'formik';
import StyledCodeInput from '../components/Inputs/StyledCodeInput';
import {colors} from '../components/colors';
import IconHeader from '../components/Icons/IconHeader';
import ResendTimer from '../components/Timers/ResendTimer';
const {primary, secondary} = colors;
import styled from 'styled-components/native';
import MessageModal from '../components/Modals/MessageModal';
const FormWrapper = styled.View`
  ${props => {
    return props.pinReady ? `opacity:1` : `opacity:0.3`;
  }}
`;
const ResetPassword = () => {
  const [message, setMessage] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const MAX_CODE_LENGTH = 4;
  const [code, setCode] = useState('');
  const [pinReady, setPinReady] = useState(false);

  const [activeResend, setActiveResend] = useState(false);
  const [resendStatus, setResendStatus] = useState('Resend');
  const [resendingEmail, setResendingEmail] = useState(false);

  //modal
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessageType, setModalMessageType] = useState('');
  const [headerText, setHeaderText] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  const buttonHandler = () => {
    if (modalMessageType === 'success') {
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

  const handleOnSubmit = async (credentials, setSubmitting) => {
    try {
      setMessage(null);
      //call backend

      setSubmitting(false);
      return showModal(
        'success',
        'All Good!',
        'Your Password has been updated successfully.',
        'Proceed',
      );
    } catch (error) {
      // setMessage('Request failed: ', error.message);
      setSubmitting(false);
      return showModal('failed', 'Failed!', error.message, 'Close');
    }
  };
  return (
    <MainContainer>
      <KeyboardAvoidingContainer>
        <RegularText style={{textAlign: 'center'}}>
          Enter the 4-digit code to your email
        </RegularText>
        <StyledCodeInput
          maxLength={MAX_CODE_LENGTH}
          code={code}
          setCode={setCode}
          setPinReady={setPinReady}
        />
        <ResendTimer
          activeResend={activeResend}
          setActiveResend={setActiveResend}
          resendStatus={resendStatus}
          resendingEmail={resendingEmail}
          resendEmail={resendEmail}
          style={{marginBottom: 25}}
        />

        <Formik
          initialValues={{newPassword: '', confirmNewPassword: ''}}
          onSubmit={(values, {setSubmitting}) => {
            if (values.confirmNewPassword == '' || values.newPassword == '') {
              setMessage('Please fill in all the fields');
              setSubmitting(false);
            } else if (values.newPassword !== values.confirmNewPassword) {
              setMessage('Passwords do not match');
              setSubmitting(false);
            } else {
              handleOnSubmit(values, setSubmitting);
            }
          }}>
          {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (
            <FormWrapper pinReady={pinReady}>
              <StyledTextInput
                label="New Password"
                icon="lock-open-variant"
                placeholder="********"
                onChangeText={handleChange('newPassword')}
                onBlur={handleBlur('newPassword')}
                value={values.newPassword}
                isPassword={true}
                style={{marginBottom: 25}}
                editable={pinReady}
              />
              <StyledTextInput
                label="Confirm New Password"
                icon="lock-open-variant"
                placeholder="********"
                onChangeText={handleChange('confirmNewPassword')}
                onBlur={handleBlur('confirmNewPassword')}
                value={values.confirmNewPassword}
                isPassword={true}
                style={{marginBottom: 25}}
                editable={pinReady}
              />

              <MsgBox style={{marginBottom: 25}} success={isSuccessMessage}>
                {message || ' '}
              </MsgBox>
              {!isSubmitting && (
                <RegularButton disabled={!pinReady} onPress={handleSubmit}>
                  Submit
                </RegularButton>
              )}
              {isSubmitting && (
                <RegularButton disabled={true}>
                  <ActivityIndicator
                    size="small"
                    color={primary}></ActivityIndicator>
                </RegularButton>
              )}
            </FormWrapper>
          )}
        </Formik>
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

export default ResetPassword;
