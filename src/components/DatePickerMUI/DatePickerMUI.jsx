import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TextField from "@mui/material/TextField";
//import {Styles} from "@material-ui/core/styles"
import { withStyles } from "@material-ui/core/styles";
import DatePicker from "@mui/lab/DatePicker";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const styles = {
  root: {
    background: "black",
  },
  input: {
    color: "red",
  },
};
const DatePickerMUI = (props) => {
  const [value, setValue] = useState(null);

  const { handleDate } = useContext(AppContext);

  const { classes } = props;
  handleDate(value);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        components={{
          OpenPickerIcon: CalendarTodayIcon,
        }}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            InputProps={{
              className: classes.input,
            }}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default withStyles(styles)(DatePickerMUI);
