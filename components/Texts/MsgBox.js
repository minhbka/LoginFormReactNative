import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {dp} from '../shared';
import {colors} from '../colors';
const {success, fail} = colors;
const StyledText = styled.Text`
  font-size: 13px;
  color: ${props => (props.success ? success : fail)};
  text-align: center;
`;
const MsgBox = props => {
  return (
    <View>
      <StyledText {...props}>{props.children}</StyledText>
    </View>
  );
};

export default MsgBox;
