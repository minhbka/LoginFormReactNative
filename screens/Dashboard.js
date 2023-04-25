import React from 'react';
import MainContainer from '../components/Containers/MainContainer';

import styled from 'styled-components/native';
import {colors} from '../components/colors';
import {ScreenHeight} from '../components/shared';
import BigText from '../components/Texts/BigText';
import InfoCard from '../components/Cards/InfoCard';
const {darkGray} = colors;

const TopBg = styled.View`
  background-color: ${darkGray};
  width: 100%;
  height: ${ScreenHeight * 0.3}px;
  border-radius: 30px;
  position: absolute;
  top: -30px;
`;

const DashBoard = () => {
  return (
    <MainContainer style={{paddingTop: 0, paddingLeft: 0, paddingRight: 0}}>
      <TopBg />
      <MainContainer style={{backgroundColor: 'transparent'}}>
        <BigText style={{marginBottom: 25, fontWeight: 'bold'}}>
          Hello, 민코이!
        </BigText>
        <InfoCard
          icon="chart-timeline-variant"
          title="Balance"
          value="$ 12,000.56"
          date="2023.04.25"
          style={{marginBottom: 25}}
        />
        <InfoCard
          icon="chart-arc"
          title="Savings"
          value="$ 5,000.56"
          date="Last 6 months"
        />
      </MainContainer>
    </MainContainer>
  );
};

export default DashBoard;
