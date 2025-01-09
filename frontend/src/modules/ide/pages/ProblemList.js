import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';



function renderRow(props) {
    const { index, style } = props;
  
    return (
      <ListItem style={style} key={index} component="div" disablePadding >
        <ListItemButton >
          <ListItemText primary={`Problem  ${index + 1}`} />
        </ListItemButton>
      </ListItem>
    );
  }


export default function ProblemList() {
  return (
    <>
    <Button>List Of Problems</Button>
    <Box
      sx={{ width: '100%', height:'100%', maxWidth:'100%', bgcolor: 'transparent' }}
    >
      <FixedSizeList
        height={530}
        width={1090}
        itemSize={46}
        itemCount={200}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
   
    </>
  );
}

