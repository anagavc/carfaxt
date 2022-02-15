import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import Paragraph from "../UI/FontStyles/Paragraph";
import DateRangeIcon from "@mui/icons-material/DateRange";
const Date = (props) => {
  const [date, setDate] = useState("");
  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  useEffect(() => {
    props.onAddDate(date);
  }, [date, props]);
  return (
    <div className="flex justify-around space-x-2">
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="flex justify-between items-center">
          <DateRangeIcon className="stroke-current text-blue" />
          <Paragraph>Pickup Date</Paragraph>
          <TextField
            id="standard-basic"
            type="date"
            variant="standard"
            onChange={dateHandler}
            value={props.value}
          />
        </div>
      </Box>
    </div>
  );
};

export default Date;
