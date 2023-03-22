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

const Signup = () => {
  const [message, setMessage] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const handleSignup = async (credentials, setSubmitting) => {
    try {
      setMessage(null);

      setSubmitting(false);
    } catch (error) {
      setMessage('Signup failed: ', error.message);
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
          initialValues={{
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={(values, {setSubmitting}) => {
            if (
              values.fullName == '' ||
              values.confirmPassword == '' ||
              values.email == '' ||
              values.password == ''
            ) {
              setMessage('Please fill in all the fields');
              setSubmitting(false);
            } else if (values.password !== values.confirmPassword) {
              setMessage('Passwords do not match');
              setSubmitting(false);
            } else {
              handleSignup(value, setSubmitting);
            }
          }}>
          {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (
            <>
              <StyledTextInput
                label="Full Name"
                icon="account"
                placeholder="Tom Jerry"
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
                style={{marginBottom: 15}}
              />
              <StyledTextInput
                label="Email Address"
                icon="email-variant"
                placeholder="email@address.com"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={{marginBottom: 15}}
              />
              <StyledTextInput
                label="Password"
                icon="lock-open"
                placeholder="********"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                isPassword={true}
                style={{marginBottom: 15}}
              />
              <StyledTextInput
                label="Confirm Password"
                icon="lock-open"
                placeholder="********"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                isPassword={true}
                style={{marginBottom: 15}}
              />
              <MsgBox style={{marginBottom: 25}} success={isSuccessMessage}>
                {message || ' '}
              </MsgBox>
              {!isSubmitting && (
                <RegularButton onPress={handleSubmit}>Signup</RegularButton>
              )}
              {isSubmitting && (
                <RegularButton disabled={true}>
                  <ActivityIndicator
                    size="small"
                    color={primary}></ActivityIndicator>
                </RegularButton>
              )}

              <PressableText style={{paddingVertical: 15}} onPress={() => {}}>
                Sign in to existing account
              </PressableText>
            </>
          )}
        </Formik>
      </KeyboardAvoidingContainer>
    </MainContainer>
  );
};

export default Signup;
