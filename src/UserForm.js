import { colors, Grid, Typography, Input, Button } from "@mui/material";

function UserForm(props) {
  return(
    <Grid
    container
    spacing={2}
    sx={{
        backgroundColor: "#ffffff",
        marginBottom: "20px",
        display: "block"   }}
    >
        <Grid
        item xs={12}
        >
        <Typography
        component={"h1"}
        sx={{ color: "#000000" }}
        >
            User Form
        </Typography>

        </Grid>
        <Grid xs={6} sx={{ display: "flex", flexDirection: "column" }}> 
        <Typography 
        component={'Label'}
        sx={{ color: "#000000",
        fontSize: 16,
        width:100 ,
        display: "block"}
        } htmlFor="id">
        ID
        </Typography>
           <Input
             type="number"
             id="id"
             name="id"
             placeholder="Enter your ID"
             sx={{
                backgroundColor: "#ffffff",
                color: "#000000",
                width: 200,
                height: 40,
                borderRadius: 2,
                border: "1px solid #000000",
                marginBottom: 2,
                marginTop: 1
             }}
                onChange={(e) => {
                  // handle input change here, e.g.:
                  // props.onChange && props.onChange(e);
                }}
                 
           />

        </Grid>

        <Grid xs={6} sx={{ display: "flex", flexDirection: "column" }}> 
        <Typography 
        component={'Label'}
        sx={{ color: "#000000",
        fontSize: 16,
        width:100 ,
        display: "block"}
        } htmlFor="id">
        Name
        </Typography>
           <Input
             type="text"
             id="name"
             name="name"
             placeholder="Enter your Name"
             sx={{
                backgroundColor: "#ffffff",
                color: "#000000",
                width: 200,
                height: 40,
                borderRadius: 2,
                border: "1px solid #000000",
                marginBottom: 2,
                marginTop: 1
             }}
                onChange={(e) => {
                  // handle input change here, e.g.:
                  // props.onChange && props.onChange(e);
                }}
                 
           />

        </Grid>
        <Button
        sx={{
            fontSize: 16,
            backgroundColor: "#000000",
            color: "#ffffff",
            width: 100,
            height: 40,
            borderRadius: 2,
            marginTop: 2,
            "&:hover": {
                backgroundColor: "#333333",
            },
        }}
        onChange={(e) => {
            // handle button click here, e.g.:
            // props.onClick && props.onClick(e);
        }}
        >
            Submit
        </Button>
        </Grid>
        
    

  );
 
}
export default UserForm;