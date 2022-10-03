import { FormControl, TextField, Button, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addWorker } from '../../services/worker.service';
import './WorkerForm.scss';
import { useQuery } from 'react-query';
import { queryFarms } from '../../services/farm.service';

function WorkerForm() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();

  const { data: farmData, isLoading: isLoadingData } = useQuery(['farms'], () => queryFarms());

  const onSubmit = (data: any) => {
    console.log(data);

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('dateOfBirth', data.dateOfBirth);
    formData.append('email', data.email);
    formData.append('position', data.position);
    formData.append('certifiedUntil', data.certifiedUntil);
    formData.append('farmId', data.farmId);
    formData.append('file', data.file[0]);

    addWorker(formData).then(()=> {
      navigate('/');
    });
  };

  return (
    <form onSubmit={handleSubmit((onSubmit))} className="worker-form">

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
          {...register("file")}
          type="file"
          hidden
        />
      </Button>

      <FormControl fullWidth>
        <TextField {...register("dateOfBirth", { required: true })} id="outlined-basic" label="Date of birth" variant="outlined" InputLabelProps={{ shrink: true, required: true }} type="date" />
        {errors.dateOfBirth?.type === 'required' && <p role="alert" className="alert">Date of birth is required</p>}
      </FormControl>

      <FormControl fullWidth>
        <TextField {...register("email", { required: true })} id="outlined-basic" label="Email" variant="outlined" />
        {errors.email?.type === 'required' && <p role="alert" className="alert">Email is required</p>}
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="position-select-label">Position</InputLabel>
        <Select
          labelId="position-select-label"
          id="position-select"
          label="Position"
          {...register("position", { required: true })}
        >
          <MenuItem value={'CEO'}>CEO</MenuItem>
          <MenuItem value={'Worker'}>Worker</MenuItem>
          <MenuItem value={'Captain'}>Captain</MenuItem>
        </Select>
        {errors.position?.type === 'required' && <p role="alert" className="alert">Position is required</p>}
      </FormControl>

      <FormControl fullWidth>
        <TextField {...register("certifiedUntil", { required: true })} id="outlined-basic" label="Certified until" variant="outlined" InputLabelProps={{ shrink: true, required: true }} type="date" />
        {errors.certifiedUntil?.type === 'required' && <p role="alert" className="alert">Certified until is required</p>}
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="farm-select-label">Associated farm</InputLabel>
        <Select
          labelId="farm-select-label"
          id="farm-select"
          label="Farm"
          {...register("farmId", { required: true })}
        >
          {
            !isLoadingData && farmData.map((farm: any, i: any) =>
              <MenuItem value={farm.farmId}>{farm.name}</MenuItem>
            )
          }
        </Select>
        {errors.farmId?.type === 'required' && <p role="alert" className="alert">Associated farm is required</p>}
      </FormControl>

      <Button type="submit" variant="outlined" className='submit-button'>Save</Button>
    </form>
  );
}

export default WorkerForm;
