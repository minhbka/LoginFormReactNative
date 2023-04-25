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
import PressableText from '../components/Texts/PressableText';
import RowContainer from '../components/Containers/RowContainer';

const {primary, secondary} = colors;

const Login = ({navigation}) => {
  const [message, setMessage] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const moveTo = (screen, payload) => {
    navigation.navigate(screen, {...payload});
  };
  const handleLogin = async (credentials, setSubmitting) => {
    try {
      setMessage(null);
      moveTo('Dashboard');
      setSubmitting(false);
    } catch (error) {
      setMessage('Login failed: ', error.message);
      setSubmitting(false);
    }
  };
  return (
    <MainContainer>
      <KeyboardAvoidingContainer>
        <RegularText style={{marginBottom: 25}}>
          Enter your account credentials
        </RegularText>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={(values, {setSubmitting}) => {
            if (values.email == '' || values.password == '') {
              setMessage('Please fill in all the fields');
              setSubmitting(false);
            } else {
              handleLogin(values, setSubmitting);
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
              <StyledTextInput
                label="Password"
                icon="lock-open"
                placeholder="********"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                isPassword={true}
                style={{marginBottom: 25}}
              />
              <MsgBox style={{marginBottom: 25}} success={isSuccessMessage}>
                {message || ' '}
              </MsgBox>
              {!isSubmitting && (
                <RegularButton onPress={handleSubmit}>Login</RegularButton>
              )}
              {isSubmitting && (
                <RegularButton disabled={true}>
                  <ActivityIndicator
                    size="small"
                    color={primary}></ActivityIndicator>
                </RegularButton>
              )}
              <RowContainer>
                <PressableText
                  onPress={() => {
                    moveTo('Signup');
                  }}>
                  New account sign up
                </PressableText>
                <PressableText
                  onPress={() => {
                    moveTo('ForgotPassword');
                  }}>
                  Forgot Password
                </PressableText>
              </RowContainer>
            </>
          )}
        </Formik>
      </KeyboardAvoidingContainer>
    </MainContainer>
  );
};

export default Login;
