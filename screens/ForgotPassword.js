import React, {useState} from 'react';
import MainContainer from '../components/Containers/MainContainer';
import KeyboardAvoidingContainer from '../components/Containers/KeyboardAvoidingContainer';
import RegularText from '../components/Texts/RegularText';
import StyledTextInput from '../components/Inputs/StyledTextInput';
import MsgBox from '../components/Texts/MsgBox';
import RegularButton from '../components/Button/RegularButton';
import {ActivityIndicator} from 'react-native';
import {Formik} from 'formik';

import {colors} from '../components/colors';
import IconHeader from '../components/Icons/IconHeader';
const {primary, secondary} = colors;

const ForgotPassword = ({navigation}) => {
  const [message, setMessage] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const moveTo = (screen, payload) => {
    navigation.navigate(screen, {...payload});
  };

  const handleOnSubmit = async (credentials, setSubmitting) => {
    try {
      setMessage(null);
      //call backend
      moveTo('ResetPassword');
      setSubmitting(false);
    } catch (error) {
      setMessage('Request failed: ', error.message);
      setSubmitting(false);
    }
  };
  return (
    <MainContainer>
      <KeyboardAvoidingContainer>
        <IconHeader name="key" style={{marginBottom: 30}} />
        <RegularText style={{marginBottom: 25}}>
          Provide the details below to begin the process.
        </RegularText>
        <Formik
          initialValues={{email: ''}}
          onSubmit={(values, {setSubmitting}) => {
            if (values.email == '') {
              setMessage('Please fill in all the fields');
              setSubmitting(false);
            } else {
              handleOnSubmit(values, setSubmitting);
            }
          }}>
          {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (
            <>
              <StyledTextInput
                label="Email Address"
                icon="email-variant"
                placeholder="email@address.com"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={{marginBottom: 25}}
              />

              <MsgBox style={{marginBottom: 25}} success={isSuccessMessage}>
                {message || ' '}
              </MsgBox>
              {!isSubmitting && (
                <RegularButton onPress={handleSubmit}>Submit</RegularButton>
              )}
              {isSubmitting && (
                <RegularButton disabled={true}>
                  <ActivityIndicator
                    size="small"
                    color={primary}></ActivityIndicator>
                </RegularButton>
              )}
            </>
          )}
        </Formik>
      </KeyboardAvoidingContainer>
    </MainContainer>
  );
};

export default ForgotPassword;
