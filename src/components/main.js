import React, {useCallback, useEffect, useReducer, useState} from 'react';
import Frame from "./frame";

import LabelC from "./labelC";

import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import {reducer, initstate} from "../state/reducer";
import TransShow from "./TransShow";
import Heading from "./heading";
import Balance from "./Balance";
import HistorySec from "./historySec";

function Main ()  {
    const [state,dispatch]=useReducer(reducer,initstate);
    const [Tname,TnameChange] =useState('')
    const [Tamount,TamountChange] =useState(0)

    return (
        <Frame>
            <div>
               <Heading/>

                <Balance amount={state.totalAmount} />
                <TransShow  income={state.totalIncome}  expance={state.totalExpance}  />
               <HistorySec statement={state.transStatement} />
                <LabelC label={'Add New Transaction'}/>

                <div>
                    <TextField id={"name"} onChange={(e)=>{
                            TnameChange(e.target.value)
                    }} style={{marginTop: 10, width: "100%"}} label={"Transaction Name"}/>
                    <Divider/>
                    <TextField type={"number"} id={"amout"} onChange={(e)=>{
                        TamountChange(e.target.value)
                    }} style={{marginTop: 10, width: "100%"}} label={"Amount"}/>
                    <Button  onClick={()=>{
                        console.log(Tamount)
                        dispatch({type:"add",payload:{
                                name:Tname,
                                amount:Tamount,
                            }})}}  style={{marginTop:10,width:"100%"}} variant="contained" color="primary">
                        Add
                    </Button>
                </div>

            </div>

        </Frame>
    );
};

export default Main;