import React from 'react';
import Typography from "@material-ui/core/Typography";

const TransCount = (props) => {
    return (
        <div style={{width:135,padding:10,paddingTop:20,textAlign:"center"}} >
            <Typography style={{fontWeight:"bold"}} >{props.TName}</Typography>
            <Typography style={{color: props.TName ==="INCOME"? "blue":"red" }}  >{props.Mcount}</Typography>
        </div>
    );
};

export default TransCount;