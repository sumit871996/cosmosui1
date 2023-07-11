import { React } from 'react';
import { Box, Button, Grid } from 'grommet';
import CardDashboard from '../../Cards/CardDashboard';
import aimlCardElements from './cdcCardElements';
const CdcDashboard = () => {
  return (
    <Box fill='horizontal'>
      <Grid pad='4%' columns='small' rows='auto' gap='large' fill='horizontal'>
        {aimlCardElements.map((el) => (
          <CardDashboard
            title={el.title}
            logo={el.logo}
            description={el.description}
            dashboardType='AIML'
          />
        ))}
      </Grid>
    </Box>
  );
};

export default CdcDashboard;
