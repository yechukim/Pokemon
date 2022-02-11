import React from 'react';
import styled from '@emotion/styled/macro';
import { mapColorToHex } from '../utils';

const Base = styled.div`
margin-top:32px;
padding:0 20px 20px`;

const Title = styled.h4`
margin:0;
padding:0;
font-size:20px;
font-weight:bold;
color:${({ color }) => color};`;

const List = styled.ul`
margin: 20px 0 0 0;
padding:0;
list-style:none;`;

const ListItem = styled.li`
display:grid;
grid-template-columns:repeat(12, minmax(0,1fr))`;

const Name = styled.div`
grid-column: span 4 / span 4;
color:#374151;
font-weight:bold;
text-transform:capitalize;
font-size:12px`;

const Amount = styled.div`
grid-column: span 1/span 1;
font-size:12px;
color: #374151;`;

const GaugeWrapper = styled.div`
grid-column: span 7 / span 7;
border-radius:12px;
overflow:hidden;
background-color:#e5e7eb;
margin-bottom:10px;
height:15px;
`;

const Gauage = styled.div`
background-color:${({ color }) => color};
width:${({ percentage }) => `${percentage}%`};
height:100%;
border-radius:12px;`;

function Stats({ stats, color }) {
  console.log(color)
  return (
    <Base>
      <Title color={mapColorToHex(color?.name)}>Base Stats</Title>
      <List>
        {
          stats?.map(({ stat, base_stat }, index) => {
            return (
              <ListItem key={index}>
                <Name>{stat.name}</Name>
                <Amount>{base_stat}</Amount>
                <GaugeWrapper>
                  <Gauage
                    percentage={(base_stat / 255) * 100}
                    color={mapColorToHex(color?.name)} />
                </GaugeWrapper>
              </ListItem>)
          })
        }

      </List>
    </Base>
  );
}

export default Stats;