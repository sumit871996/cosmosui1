import React, { useContext } from 'react';
import { Box, Button, Footer, ResponsiveContext, Text } from 'grommet';
import { useNavigate } from 'react-router-dom';

export const AppFooter = () => {
  const navigate = useNavigate();
  const size = useContext(ResponsiveContext);
  const year = new Date().getFullYear();

  const footerLinks = [
    { label: 'Terms' },
    { label: 'Privacy' },
    { label: 'Security' },
    { label: 'Feedback' },
  ];
  return (
    <Footer
      background='background-front'
      direction={!['xsmall', 'small'].includes(size) ? 'row' : 'column'}
      align={!['xsmall', 'small'].includes(size) ? 'center' : undefined}
      pad={{ horizontal: 'medium', vertical: 'medium' }}
      fill='horizontal'
      border='top'
    >
      <Box
        direction={
          !['xsmall', 'small'].includes(size) ? 'row-responsive' : 'column'
        }
        align={!['xsmall', 'small'].includes(size) ? 'center' : undefined}
        gap='xsmall'
        justify='center'
      >
        <Text size='small'>
          &copy; {year} Hewlett Packard Enterprise Development LP
        </Text>
      </Box>
      <Box
        flex
        direction='row-responsive'
        gap='xsmall'
        align='center'
        justify='end'
        // margin='auto'
      >
        <Button
          label='Terms'
          color='black'
          weight='bold'
          size='small'
          pad={{ horizontal: 'small' }}
          margin='0px'
          onClick={() => navigate('/terms')}
        />
        <Button
          label='Privacy'
          color='black'
          weight='bold'
          size='small'
          pad={{ horizontal: 'small' }}
          margin='0px'
          onClick={() => navigate('/privacy')}
        />
        <Button
          label='Security'
          color='black'
          weight='bold'
          size='small'
          pad={{ horizontal: 'small' }}
          margin='0px'
          onClick={() => navigate('/security')}
        />
        <Button
          label='Feedback'
          color='black'
          weight='bold'
          size='small'
          pad={{ horizontal: 'small' }}
          margin='0px'
          onClick={() => navigate('/feedback')}
        />
      </Box>
    </Footer>
  );
};
