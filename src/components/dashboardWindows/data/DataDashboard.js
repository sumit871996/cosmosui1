import { React } from 'react';
import { Box, Button, Grid } from 'grommet';
import CardDashboard from '../../cards/CardDashboard';
import dataCardElement from './dataCardElements';
const DataDashboard = () => {
  return (
    <Box fill='horizontal'>
      <Grid pad='4%' columns='small' rows='auto' gap='large' fill='horizontal'>
        {dataCardElement.map((el) => (
          <CardDashboard
            title={el.title}
            logo={el.logo}
            description={el.description}
            dashboardType='Data'
          />
        ))}
      </Grid>
    </Box>
  );
};

export default DataDashboard;
