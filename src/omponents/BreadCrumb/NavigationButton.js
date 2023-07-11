import React from 'react';
import { Box, Button, ResponsiveContext } from 'grommet';
import { Previous, Next } from 'grommet-icons';
import { useNavigate } from 'react-router-dom';
import { dataMigrationOptions } from '../../Config/dataMigrationOptions';

export const NavigationButton = (props) => {
  const size = React.useContext(ResponsiveContext);
  const Navigate = useNavigate();

  const navigateFunction = () => {
    props.setSelected(dataMigrationOptions[0]);
    Navigate(`/dashboard/Solution/${dataMigrationOptions[0]}`);
  };
  return (
    <Box
      direction={!['xsmall', 'small'].includes(size) ? 'column' : 'row'}
      gap={!['xsmall', 'small'].includes(size) ? 'small' : 'medium'}
    >
      <Box
        direction={!['xsmall', 'small'].includes(size) ? 'row' : 'column'}
        gap='medium'
        align='end'
      >
        <Button
          onClick={() => {
            props.name != 'Solution'
              ? Navigate(`/dashboard/Solution/${props.name}`)
              : navigateFunction();
          }}
          size='small'
          // pad={{ left: 'xsmall', right: 'xsmall' }}
          label={props.name}
          icon={!props.last && <Next />}
          reverse
        />
      </Box>
    </Box>
  );
};
