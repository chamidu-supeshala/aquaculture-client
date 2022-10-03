import { Grid } from '@mui/material';
import { useQuery } from 'react-query';
import FarmInfo from '../../components/FarmInfo/FarmInfo';
import { queryFarms } from '../../services/farm.service';
import './Home.scss';

function Home() {

  const { data: farmData, isLoading: isLoadingData } = useQuery(['farms'], () => queryFarms());

  return (
    <Grid container spacing={2} sx={{ p: 3 }} className="farm-list">
      { isLoadingData && <p>Loading...</p> }
      {
        !isLoadingData && farmData.map((farm: any, i: any) =>
          <Grid key={i} item xs={12}>
            <FarmInfo data={farm}/>
          </Grid>
        )
      }
    </Grid>
  );
}

export default Home;
