import React from 'react';
import { Box, Text, Button } from 'grommet';
import toolbarElemnts from './toolbarElements';
import { useNavigate } from 'react-router-dom';
const ToolBar = (props) => {
  const navigate = useNavigate();
  return (
    <Box direction='row-responsive' pad='xxsmall'>
      <Box flex direction='row-responsive' align='center' justify='start'>
        {toolbarElemnts.map((el) => (
          <Button
            active={props.selectedDashboard == el.title}
            weight='bold'
            color='black'
            size='small'
            label={el.title}
            alignSelf='center'
            icon={el.logo}
            onClick={() => {
              props.setSelectedDashboard(el.title);
              navigate(`/${el.title}/dashboard`);
            }}
          />
        ))}
      </Box>
      <Box justify='center' align='end'>
        <Button
          weight='bold'
          color='black'
          size='small'
          label='Create Project'
          alignSelf='center'
          onClick={() => {
            navigate(`/createproject`);
          }}
        />
      </Box>
    </Box>
  );
};

export default ToolBar;
