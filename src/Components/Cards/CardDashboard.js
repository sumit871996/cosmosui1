import { Box, Card, Text, Button } from 'grommet';
import { useState } from 'react';
import { View } from 'grommet-icons';
import { useNavigate } from 'react-router-dom';
const CardDashboard = (props) => {
  const barthk = 10;
  const navigate = useNavigate();

  return (
    <Box height='100%'>
      <Card
        onClick={() => navigate(`/${props.dashboardType}/${props.title}`)}
        height='150px'
        title='Edit Details'
        background='light'
        footer={<Button label='Update' secondary />}
      >
        <Box
          height='100%'
          direction='column'
          pad={{ horizontal: 'small', vertical: 'small' }}
          // align='center'
          justify='between'
        >
          <Box flex align='start' justify='center' height='100%'>
            {props.logo}
          </Box>
          <Box height='50%' align='start' justify='between'>
            <Text flex color='black' weight='bold' size='xxsmall'>
              {props.title}
            </Text>
            <Text height='60%' weight='bold' size='xsmall'>
              {props.description}
            </Text>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
export default CardDashboard;
