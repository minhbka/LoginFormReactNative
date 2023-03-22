import React from 'react';
import MainContainer from '../components/Containers/MainContainer';
import KeyboardAvoidingContainer from '../components/Containers/KeyboardAvoidingContainer';
import RegularText from '../components/Texts/RegularText';
import StyledTextInput from '../components/Inputs/StyledTextInput';
import {Formik} from 'formik';
const Login = () => {
  return (
    <MainContainer>
      <KeyboardAvoidingContainer>
        <RegularText style={{marginBottom: 25}}>
          Enter your account credentials
        </RegularText>
        <Formik initialValues={{email: '', password: ''}}>
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
                style={{marginBottom: 25}}
              />
            </>
          )}
        </Formik>
      </KeyboardAvoidingContainer>
    </MainContainer>
  );
};

export default Login;
