import React from 'react';
import {Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

const LabelC = (props) => {
    return (
        <>
            <Typography style={{marginTop: 10, fontSize: 17}}>{props.label}</Typography>
            <Divider style={{height: 2}}/>
        </>
    );
};

export default LabelC;