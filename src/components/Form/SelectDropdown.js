import React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Stack, Typography } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const SelectDropdown = ({ data, label }) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [handleValue, setHandleValue] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setHandleValue(value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <Stack>
          <Typography variant="overline">{label}</Typography>
        </Stack>

        <Select
          className="h-10"
          labelId="demo-name-label"
          id="demo-name"
          value={handleValue}
          onChange={handleChange}
          //   input={<OutlinedInput size={24} label="Name" />}
          MenuProps={MenuProps}
        >
          {data.map((item, index) => (
            <MenuItem
              key={index}
              value={item}
              //   style={getStyles(item, personName, theme)}
            >
              <span className="uppercase">{item.name}</span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectDropdown;
