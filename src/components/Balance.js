import React from 'react';
import {Typography} from "@material-ui/core";

const Balance = (props) => {
    return (
        <div>
            <Typography style={{fontSize: 25, fontWeight: "bold"}}>Balance</Typography>
            <Typography style={{fontSize: 20}}>{props.amount}</Typography>
        </div>
    );
};

export default Balance;