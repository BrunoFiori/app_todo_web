import { FormControl, InputLabel, InputProps, OutlinedInput as MuiOutlinedInputField } from '@mui/material';

export interface ArdomentTextFieldProps extends InputProps {
  label: string;
}

const ArdomentTextField = (props: ArdomentTextFieldProps) => {
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
      <MuiOutlinedInputField {...props} />
    </FormControl>
  );
};

export default ArdomentTextField;
