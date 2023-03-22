import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {dp} from '../shared';
import {colors} from '../colors';
const {tertiary} = colors;
const StyledText = styled.Text`
  font-size: 13px;
  color: ${tertiary};
  text-align: left;
`;
const SmallText = props => {
  return (
    <View>
      <StyledText {...props}>{props.children}</StyledText>
    </View>
  );
};

export default SmallText;
