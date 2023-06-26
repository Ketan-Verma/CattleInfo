import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import AutoComplete from "./AutoComplete";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CattleData from "../data/Data.json";
import { blue } from "@mui/material/colors";

export default function NavBar({ onSelectSerialNumber }) {
  function handleOptionChange(event, value) {
    onSelectSerialNumber(value);
    // console.log(value);
  }

  function AutoComplete() {
    // console.log(CattleData)
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={CattleData}
        onChange={handleOptionChange}
        getOptionLabel={(option) => option.Sno}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search..." />}
      />
    );
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ p: 1, backgroundColor: "lightgrey" }}>
        <Toolbar sx={{ justifyContent: "center", color: "blue" }}>
          <AutoComplete sx={{ color: "blue" }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
