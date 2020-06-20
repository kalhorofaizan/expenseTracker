import React from 'react';
import {Paper} from "@material-ui/core";
import TransCount from "./TransCount";

const TransShow = (props) => {
    return (
        <Paper style={{height: 100, marginTop: 10}} elevation={2}>
            <div style={{display: "flex", flexDirection: 'row'}}>
                <TransCount TName={"INCOME"} Mcount={"$"+props.income}/>
                <div style={{width: 1, height: 65, backgroundColor: "gray", marginTop: 15}}></div>
                <TransCount TName={"EXPENSE"} Mcount={"$"+props.expance}/>
            </div>
        </Paper>
    );
};

export default TransShow;