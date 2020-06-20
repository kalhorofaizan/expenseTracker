import React from 'react';
import {Paper, Typography} from "@material-ui/core";

const HCard = (props) => {
    return (
        <Paper  variant={"outlined"}  style={{height:40,display:"flex",alignItems:"center",marginTop:3,borderRightWidth:5,borderRightColor:props.tamount>0? "blue":"red" }} >
            <Typography style={{marginLeft:5,fontWeight:"bold"}} >{props.tname}</Typography>
            <Typography style={{marginLeft:"auto",marginRight:5}} >{props.tamount}</Typography>
        </Paper>
    );
};

export default HCard;