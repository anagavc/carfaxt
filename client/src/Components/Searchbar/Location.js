import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FadeLeftAnimation } from "../UI/Animations/Animations";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
const Location = (props) => {
  const cities = [
    { name: "Lagos", id: 1 },
    { name: "Rivers", id: 2 },
    { name: "Abuja", id: 3 },
  ];

  return (
    <FadeLeftAnimation>
      <div className="md:flex justify-between items-center hidden">
        <LocationSearchingIcon className="stroke-current text-blue text-sm" />

        <FormControl
          variant="standard"
          className="-mt-4"
          sx={{ m: 1, minWidth: 200 }}
        >
          <InputLabel id="demo-simple-select-standard-label">
            Choose your location
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="location"
            value={props.value}
            onChange={props.onChange}
          >
            {cities.map((city) => (
              <MenuItem value={city.name} key={city.id}>
                {city.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </FadeLeftAnimation>
  );
};

export default Location;
