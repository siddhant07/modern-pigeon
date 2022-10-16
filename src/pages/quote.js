import React from 'react';
import {TextField, Button, Select, MenuItem, InputLabel, FormControl, Box} from '@material-ui/core';
import Stack from '@mui/material/Stack';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      length: 0,
      weight: 0,
      from: "",
      to: "",
      deliveryService: "Please Select One"
    };
  }

  handleChange = (event) => {
    this.setState({deliveryService: event.target.value});
  }

  handleClick = () => {
    // get values from text fields and select fields and store them in variables (this.state)
    document.getElementById('modal').style.display = 'block';
    this.setState.state = {
      height: document.getElementById("height").value,
      width: document.getElementById("width").value,
      length: document.getElementById("length").value,
      weight: document.getElementById("weight").value,
      from: document.getElementById("ship-from").value,
      to: document.getElementById("ship-to").value,
      deliveryService: this.state.deliveryService
    };
    console.log(this.state);
  }

  handleClose = () => {
    document.getElementById('modal').style.display = 'none';
  }

  render() {
    return (
      <div>
        <h1 style={{
          margin: 'auto',
          marginTop: '20px',
          width: '500px',
          fontFamily: "Roboto",
          fontWeight: "bold",
          fontSize: "40px",
          color: "#000000",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
        }}>Get Your Quote Today!</h1>
        <Box style={{
          paddingTop: '100px',
          paddingLeft: "570px",
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
          <div style={{
            border: '2px solid black',
            borderRadius: '10px',
            padding: '20px',
            width: '500px',
          }}>
          <h1>Enter international addresses or ZIP codes to get a quote.</h1>
          <p style={{
            fontSize: '15px',
            fontStyle: 'italic',
          }}>*Required Fields</p>
          <FormControl >
            <Stack spacing={2} style={{
              width: '500px',
              position: 'relative',
              }}>
              <InputLabel id="demo-simple-select-label">Delivery Service</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="select-delivery-service"
                label="DeliveryService"
                value={this.state.deliveryService}
                onChange={this.handleChange}
              >
                <MenuItem value={"Basic"}>Basic</MenuItem>
                <MenuItem value={"Premium"}>Premium</MenuItem>
                <MenuItem value={"Ultra"}>Ultra</MenuItem>
              </Select>
                <TextField id="ship-from" label="Ship From*" variant="outlined" />
                <TextField id="ship-to" label="Ship To*" variant="outlined" />
              </Stack>
              <Stack >
                {/* add two textfield that are side by side */}
                <div style={{display: 'flex', flexDirection: 'row', width: '50x'}}>
                  <TextField id="weight" label="Weight (lbs)*" variant="outlined" />
                  <TextField id="height" label="Height (in)*" variant="outlined" />
                </div>
                </Stack>
                <Stack >
                <div style={{display: 'flex', flexDirection: 'row', width: '50x'}}>
                  <TextField id="length" label="Length (in)*" variant="outlined" />
                  <TextField id="width" label="Width (in)*" variant="outlined" />
                </div>
            </Stack>
            <Button variant="contained" color="primary" onClick={this.handleClick} style={{
            width: '500px',
            marginTop: '20px',
            marginBottom: '20px',
            backgroundColor: '#FFC700',
            color: '#000000',
            fontWeight: 'bold',
            fontSize: '20px',
            textTransform: 'none',
          }}>
            Get a Quote
          </Button>
          </FormControl>
          </div>
          <div id='modal' style={{
            display: 'none',
            position: 'fixed',
            padding: '250px',
            paddingLeft: '450px',
            zIndex: '1',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
            overflow: 'auto',
            border: '2px solid black',
            backgroundColor: 'rgba(0,0,0,0.4)'
          }}>
          <div id='modal-content' style={{
          backgroundColor: '#fefefe',
          margin: '10% auto', 
          marginLeft: '3%',
          border: '1px solid #888',
          width: '50%',
        }}>
          <Button onClick={this.handleClose} style={{
            color: '#aaa',
            float: 'right',
            fontSize: '28px',
            fontWeight: 'bold',
          }}>&times;</Button>
          <p>According to the description of your package... your estimated quote to get from here to there would be $15 and take 3 days</p>
        </div>
        </div>
        </Box>
      </div>
    );
  }
}

export default Quote;