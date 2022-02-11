import React from 'react';
import styled from '@emotion/styled/macro';
import { mapColorToHex } from '../utils';

const List = styled.div`
list-style:none;
margin:0;
padding:0;
display:flex;
`

const ListItem = styled.li`
& + & {
  margin-left:16px;
}
`
const TabButton = styled.button`
margin:0;
border-radius:8px;
box-shadow:6px 4px 14px 5px rgba(0,0,0,.21);
padding: 6px 12px;
background-color:#fff;
border:none;
font-size:16px;
color:${({ active, color }) => active ? color : '#6b728d'};
cursor:pointer;
:hover{
  background-color:#eee;
}
transition: .4s;
`

function Tabs({ tab, onClick, color }) {
  return (
    <List>
      <ListItem onClick={() => onClick('about')}>
        <TabButton
          color={mapColorToHex(color?.name)}
          active={tab === 'about'}> About</TabButton>
      </ListItem>
      <ListItem onClick={() => onClick('stats')}>
        <TabButton
          color={mapColorToHex(color?.name)}
          active={tab === 'stats'} > Stats</TabButton></ListItem>
      <ListItem onClick={() => onClick('evolution')}>
        <TabButton
          color={mapColorToHex(color?.name)}
          active={tab === 'evolution'}> Evolution</TabButton></ListItem>
    </List>
  );
}

export default Tabs;