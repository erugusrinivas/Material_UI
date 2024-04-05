// import React from 'react'
// import {Toolbar,AppBar,Typography,Container, ImageList, ImageListItem} from '@material-ui/core'
// import ImagesData from './ImagesData.json'
// function App() {
//   return (
//     <>
//      {/* <Typography variant='h1'>Hello World</Typography> */}
//      <AppBar>
//       <Toolbar>
//       <Typography variant='h5'>Photogarpy</Typography>
//       </Toolbar>
//      </AppBar>
//     <Container style={{"marginTop":"70px","textAlign":"center"}}>
//     <Typography variant="h2">Our Latest Version of Photography</Typography>
//      <Typography paragraph>pleasure to take photos as well, please fill below </Typography>
//     </Container>
//     <Container>
//       <ImageList rowHeight={170} cols={3}>
//       {ImagesData.map(imageObj =>

//            <ImageListItem key={imageObj.id} cols={1}>
//             <img src={imageObj.thumb} alt={imageObj.description}/>
//            </ImageListItem>
//          )} 
//       </ImageList>
//     </Container>
//     </>
//   );
// }

// export default App;

import React from 'react';
import { Toolbar, AppBar, Typography, Container, ImageList, ImageListItem, TextField, Button } from '@material-ui/core';
import ImagesData from './ImagesData.json';

function App() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant='h6'>Photography</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "70px", textAlign: "center" }}>
        <Typography variant="h2">Our Latest Photography</Typography>
        <Typography paragraph>Pleasure to share our latest captures with you.</Typography>
      </Container>
      <Container>
        <ImageList rowHeight={170} cols={3}>
          {ImagesData.map(imageObj =>
            <ImageListItem key={imageObj.id} cols={1}>
              <img src={imageObj.thumb} alt={imageObj.description} />
            </ImageListItem>
          )}
        </ImageList>
      </Container>
      <center>
        <Container>
          <Typography variant='h5'>Contact Form</Typography>
          <form>
            <TextField style={{ "width": "500px", "margin": "5px" }} type="text" label="Name" variant="outlined" /><br />
            <TextField style={{ "width": "500px", "margin": "5px" }} type="email" label="email" variant="outlined" /><br />
            <TextField style={{ "width": "500px", "margin": "5px" }} type="text" label="proposal" variant="outlined" /><br />
            <TextField style={{ "width": "500px", "margin": "5px" }} type="text" label="Address" variant="outlined" /><br />
            <Button variant="contained" color="primary">Submit</Button>
          </form>
        </Container>
      </center>
    </>
  );
}

export default App;
