import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  TextField,
  styled
} from "@mui/material";
import axios from "axios";

const Imagebox= styled('div')({
    ".file-upload":{
        border:'3px dashed green',
        width:'300px',
        cursor:'pointer',
        textAlign:'center',
        padding:'1.5rem',
        "& input":{
            display:'block',
            opacity:'0',
            width:'100%',
            height:'100%',
        }
    }
})

const Category = () => {
  const [category, Setcategory] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [file,setFile]= useState();

  const getcategory = async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      if (res.status === 200) {
        Setcategory(res.data);
        console.log("category", category);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getcategory();
  },[]);
  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);

    if (value.trim() === "") {
      setError("Field can not be empty");
    } else {
      setError("");
    }
  };
  const handleImage=(e)=>{
    setFile(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <Box>
      <Container>
        <Box>
          <Typography variant="h2">Category Section</Typography>
        </Box>
        <Grid container spacing={3}>
          {category.map((data) => {
            return (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <Box sx={{width:'100px'}}>
                    <img
                      src={data.image}
                      alt={data.title}
                      style={{width:'100%',height:'80px'}}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6">Name: {data.title}</Typography>
                    <Typography variant="h6">INR: {data.price}</Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <Box>
          <TextField
            variant="outlined"
            placeholder="Enter YOur Name"
            size="small"
            autoComplete="off"
            value={name}
            onChange={handleChange}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </Box>
       <Imagebox>
       <Box className="file-upload">
       
            {/* <input type="file" onChange={handleImage}></input> */}
            <TextField type="file" variant="standard" onChange={handleImage}/>
            <Typography variant="body1" color="#000">Upload</Typography>
        </Box>
        <Box sx={{border:'2px solid tomato',width:'300px',height:'100%'}}>
                <img src={file} width="100%"/>
            </Box>
       </Imagebox>
      </Container>
    </Box>
  );
};
export default Category;