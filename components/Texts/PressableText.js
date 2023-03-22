import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';
const {primary, accent} = colors;
import SmallText from '../Texts/SmallText';
import {Button} from 'react-native';
const StyledPressable = styled.Pressable`
  padding-top: 15px;
  padding-bottom: 15px;
  align-self: center;
`;
const PressableText = props => {
  return (
    <StyledPressable onPress={props.onPress} {...props}>
      <SmallText style={{color: accent}}>{props.children}</SmallText>
    </StyledPressable>
  );
};

export default PressableText;
