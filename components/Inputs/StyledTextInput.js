import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SmallText from '../Texts/SmallText';
const {primary, tertiary, secondary, accent, lightGray} = colors;
const InputField = styled.TextInput`
  background-color: ${primary};
  padding: 15px;
  padding-left: 65px;
  padding-right: 55px;
  border-radius: 10px;
  font-size: 16px;
  height: 60px;
  margin-top: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
  border-color: ${secondary};
  border-width: 1px;
`;

const LeftIcon = styled.View`
  position: absolute;
  top: 35px;
  left: 15px;
  z-index: 1;
  border-right-width: 1px;
  border-color: ${secondary};
  padding-right: 10px;
`;

const StyledTextInput = ({icon, label, ...props}) => {
  const [inputBackgroundColor, setInputBackgroundColor] = useState(primary);
  const customOnBlur = () => {
    props?.onBlur;
    setInputBackgroundColor(primary);
  };
  const customOnFocus = () => {
    props?.onFocus;
    setInputBackgroundColor(secondary);
  };
  return (
    <View>
      <LeftIcon>
        <Icon name={icon} size={30} color={accent} />
      </LeftIcon>
      <SmallText>{label}</SmallText>
      <InputField
        {...props}
        placeholderTextColor={lightGray}
        style={{backgroundColor: inputBackgroundColor, ...props?.style}}
        onBlur={customOnBlur}
        onFocus={customOnFocus}
      />
    </View>
  );
};

export default StyledTextInput;
