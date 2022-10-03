import { Box, Chip, Grid } from '@mui/material';
import { SERVER_BASE_URL } from '../../config/constants';
import './FarmInfo.scss';

const styles = {
  customBoxStyle: {
    border: '1px solid grey',
    borderRadius: '5px'
  }
};

function FarmInfo(props: any) {
  return (
    <Box component="div" sx={styles.customBoxStyle} className="farm-info">
      <Grid container spacing={2} sx={{ p: 3 }}>
        <Grid item xs={3}>
          <div>
            <img src={`${SERVER_BASE_URL}${props.data?.imageUrl}`} className="farm-image"/>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div className="farm-details-wrapper">
            <Box sx={{ display: 'flex' }}>
              <h2>{ props.data?.name }</h2>
              <Chip sx={{ ml: 'auto' }} label={ props.data?.hasBarge ? 'Has a barge' : 'Does not have a barge' } color={ props.data?.hasBarge ? 'success' : 'warning' } variant="outlined" />
            </Box>
            <div className="farm-details">
              <p>GPS Position: { props.data?.gpsPosition }</p>
              <p>No of cages: { props.data?.noOfCages }</p>
            </div>
            <h3>Workers</h3>
            <div className="workers">
              <Grid container spacing={2} sx={{ p: 3 }} className="workers-list">
                {
                  props.data?.workers && props.data.workers.map((worker: any, i: any) =>
                    <Grid key={i} item xs={6} md={4} lg={3} xl={2}>
                      <div className="worker">
                        {worker.name}
                        <div className="image-wrapper">
                          <img src={`${SERVER_BASE_URL}${worker?.imageUrl}`} className="worker-image"/>
                        </div>
                      </div>
                    </Grid>
                  )
                }
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FarmInfo;
