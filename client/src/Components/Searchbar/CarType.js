import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CarRentalIcon from "@mui/icons-material/CarRental";
import { FadeRightAnimation } from "../UI/Animations/Animations";
const CarType = (props) => {
  const cars = [
    { name: "Toyota", id: 1 },
    { name: "Acura", id: 2 },
    { name: "Mercedes", id: 3 },
    { name: "Audi", id: 4 },
  ];

  return (
    <FadeRightAnimation>
      <div className="flex items-center">
        <CarRentalIcon className="stroke-current text-blue text-sm w-1/5" />

        <FormControl
          variant="standard"
          className="-mt-4"
          sx={{ m: 1, minWidth: { xs: 140, sm: 140, md: 200 } }}
        >
          <InputLabel id="carmodel">Select car type</InputLabel>
          <Select
            labelId="carmodel"
            id="demo-simple-select-standard"
            label="carmodel"
            value={props.value}
            onChange={props.onChange}
          >
            {cars.map((car) => (
              <MenuItem value={car.name} key={car.id}>
                {car.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </FadeRightAnimation>
  );
};

export default CarType;
