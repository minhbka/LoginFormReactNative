import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';
const StyledView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;
const RowContainer = props => {
  return <StyledView {...props}>{props.children}</StyledView>;
};

export default RowContainer;
