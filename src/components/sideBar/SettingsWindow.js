import React from 'react';
import { Box, Text } from 'grommet';
import { SettingsOption } from 'grommet-icons';
const SettingsWindow = () => {
  return (
    <Box
      border={{
        color: 'gray',
        size: '2px',
        style: 'solid',
        side: 'top',
      }}
      fill='horizontal'
      align='start'
      width='100%'
      pad={{ top: 'medium' }}
    >
      <Box
        fill='horizontal'
        justify='start'
        pad={{ horizontal: 'small', vertical: 'xsmall' }}
      >
        <Box
          fill='horizontal'
          justify='start'
          align='center'
          direction='row-responsive'
        >
          <SettingsOption color='#00739D' size='medium' />
          <Text
            color='black'
            weight='bold'
            size='medium'
            margin={{ left: 'small' }}
          >
            Settings
          </Text>
        </Box>
        <Text margin={{ vertical: 'xsmall' }} size='small'>
          Set parameters for Data flow
        </Text>
      </Box>
      <Box
        fill='horizontal'
        // style={{ backgroundColor: 'red' }}
        justify='between'
        direction='row-responsive'
        border='top'
        pad={{ horizontal: 'small', vertical: 'xsmall' }}
      >
        <Text color='#00739D' margin={{ vertical: 'xsmall' }} size='small'>
          constraint
        </Text>
        <Text color='#00739D' margin={{ vertical: 'xsmall' }} size='small'>
          Execute sql task
        </Text>
      </Box>
      <Box
        fill='horizontal'
        // style={{ backgroundColor: 'red' }}
        justify='between'
        direction='row-responsive'
        border='horizontal'
        pad={{ horizontal: 'small', vertical: 'xsmall' }}
      >
        <Text color='#00739D' margin={{ vertical: 'xsmall' }} size='small'>
          Name
        </Text>
        <Text color='#00739D' margin={{ vertical: 'xsmall' }} size='small'>
          Source 1
        </Text>
      </Box>
      <Box
        fill='horizontal'
        // style={{ backgroundColor: 'red' }}
        justify='between'
        direction='row-responsive'
        border='bottom'
        pad={{ horizontal: 'small', vertical: 'xsmall' }}
      >
        <Text color='#00739D' margin={{ vertical: 'xsmall' }} size='small'>
          Expression
        </Text>
        <Text color='#00739D' margin={{ vertical: 'xsmall' }} size='small'>
          True
        </Text>
      </Box>
    </Box>
  );
};

export default SettingsWindow;
