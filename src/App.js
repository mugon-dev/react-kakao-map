import "./App.css";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { Button, TextField } from "@material-ui/core";
import Modal from "./kakao/Modal";

function App() {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState();
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    console.log(value);
    setLocation(value);
    setOpen(false);
  };
  const searchKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSearchValue(e.target.value);
      setOpen(true);
      //setSearch(e.target.value);
      console.log("받아온 값: " + searchValue);
    }
  };
  return (
    <div>
      <Typography variant="subtitle1">Selected: {setSearchValue}</Typography>
      <br />
      <TextField
        id="outlined-basic"
        label="Search"
        name="search"
        onKeyPress={searchKeyPress}
      />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <Modal
        searchValue={searchValue}
        open={open}
        onClose={handleClose}
        location={setLocation}
      />
      <div>받아온 값</div>
      <div>{location.latitude}</div>
      <div>{location.longitude}</div>
    </div>
  );
}

export default App;
