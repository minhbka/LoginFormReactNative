import {View, Text, SafeAreaView} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';
import {dp} from '../shared';
const {accent, secondary, tertiary} = colors;
const CodeInputSection = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-vertical: 35px;
`;
const CodeInputContainer = styled.Pressable`
  width: 70%;
  flex-direction: row;
  justify-content: space-between;
`;

const CodeInput = styled.View`
  min-width: 15%;
  padding: 12px;
  border-bottom-width: 5px;
  border-radius: 10px;
  border-color: ${secondary};
`;

const CodeInputText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: ${tertiary};
`;
const CodeInputFocused = styled(CodeInput)`
  border-color: ${accent};
`;

const HidenTextInput = styled.TextInput`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
`;
const StyledCodeInput = ({code, setCode, maxLength, setPinReady}) => {
  const codeDigitArray = new Array(maxLength).fill(0);
  const [inputContainerFocused, setInputContainerFocused] = useState(false);
  const textInputRef = useRef(null);
  const handleOnpress = () => {
    setInputContainerFocused(true);
    textInputRef?.current?.focus();
  };
  const handleOnSubmitEditing = () => {
    setInputContainerFocused(false);
  };
  useEffect(() => {
    setPinReady(code.length === maxLength);
    return () => {
      setPinReady(false);
    };
  }, [code]);
  const toCodeDigitInput = (value, index) => {
    const emptyInputChar = ' ';
    const digit = code[index] || emptyInputChar;
    const isCurrentDigit = index === code.length;
    const isLastDigit = index === maxLength - 1;
    const isCodeFull = code.length === maxLength;

    const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);
    const StyledInput =
      inputContainerFocused && isDigitFocused ? CodeInputFocused : CodeInput;
    return (
      <StyledInput key={index}>
        <CodeInputText>{digit}</CodeInputText>
      </StyledInput>
    );
  };

  return (
    <CodeInputSection>
      <CodeInputContainer onPress={handleOnpress}>
        {codeDigitArray.map(toCodeDigitInput)}
      </CodeInputContainer>
      <HidenTextInput
        keyboardType="number-pad"
        returnKeyType="done"
        textContentType="oneTimeCode"
        ref={textInputRef}
        value={code}
        onChangeText={setCode}
        maxLength={maxLength}
        onSubmitEditing={handleOnSubmitEditing}
      />
    </CodeInputSection>
  );
};

export default StyledCodeInput;
