import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';
import {dp} from '../shared';
const {primary} = colors;
const StyledView = styled.SafeAreaView`
  flex: 1;
  padding: 25px;
  background-color: ${primary};
`;
const MainContainer = props => {
  return <StyledView {...props}>{props.children}</StyledView>;
};

export default MainContainer;
