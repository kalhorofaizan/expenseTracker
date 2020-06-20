import React from 'react';
import LabelC from "./labelC";
import HCard from "./HCard";

const HistorySec = (props) => {
    return (
        <div>
            <LabelC label={"History"}/>
            <div style={{marginTop: 10}}>
                {
                    props.statement.map((data,key)=>{
                        return  <HCard key={key} tname={data.name} tamount={data.amount}  />
                    })
                }

            </div>
        </div>
    );
};

export default HistorySec;