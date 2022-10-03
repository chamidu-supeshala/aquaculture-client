import { FormControl, TextField, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addFarm } from '../../services/farm.service';
import './FarmForm.scss';

function FarmForm() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('gpsPosition', data.gpsPosition);
    formData.append('noOfCages', data.noOfCages);
    formData.append('hasBarge', data.hasBarge);
    formData.append('file', data.file[0]);

    addFarm(formData).then(()=> {
      navigate('/');
    });
  };

  return (
    <form onSubmit={handleSubmit((onSubmit))} className="farm-form">

      <FormControl fullWidth>
        <TextField {...register("name", { required: true })} id="outlined-basic" label="Name" variant="outlined" />
        {errors.name?.type === 'required' && <p role="alert" className="alert">Name is required</p>}
      </FormControl>

      <Button
        variant="contained"
        component="label"
        className='file-upload'
      >
        Select image
        <input
          {...register("file", { required: true })}
          type="file"
          hidden
        />
      </Button>
      {errors.file?.type === 'required' && <p role="alert" className="alert">Image is required</p>}

      <FormControl fullWidth>
        <TextField {...register("gpsPosition", { required: true, pattern: /^(\d{0,19}\.\d{4}|)$/ })} id="outlined-basic" label="GPS Position" variant="outlined" />
        {errors.gpsPosition?.type === 'required' && <p role="alert" className="alert">GPS Position is required</p>}
        {errors.gpsPosition?.type === 'pattern' && <p role="alert" className="alert">GPS Position is not valid</p>}
      </FormControl>

      <FormControl fullWidth>
        <TextField {...register("noOfCages", { required: true })} type="number" id="outlined-basic" label="No of cages" variant="outlined" />
        {errors.noOfCages?.type === 'required' && <p role="alert" className="alert">No of cages is required</p>}
      </FormControl>

      <FormGroup>
        <FormControlLabel control={<Checkbox {...register("hasBarge")} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>} label="Has barge" />
      </FormGroup>

      <Button type="submit" variant="outlined" className='submit-button'>Save</Button>
    </form>
  );
}

export default FarmForm;
