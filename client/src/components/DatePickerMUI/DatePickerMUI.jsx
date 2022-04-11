import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import { useState } from "react";

export const DatePickerMUI = () => {
  const [value, setValue] = useState(null);

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
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};
