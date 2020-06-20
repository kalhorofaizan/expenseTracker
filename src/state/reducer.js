

const initstate={
    totalAmount:0,
    totalIncome:0,
    totalExpance:0,
    transStatement:[]
}

const reducer=(state,action)=>{
    switch (action.type) {
        case "add":
            state.transStatement.push(action.payload)
            state.totalAmount+=parseInt(action.payload.amount);
            if (action.payload.amount>0){
                state.totalIncome+=parseInt(action.payload.amount)
            }else {
                state.totalExpance+=Math.abs(action.payload.amount)
            }
            localStorage.setItem("balance",JSON.stringify(state))
            return {...state}
        case "init":
            console.log("init")
               var data =localStorage.getItem("balance")
                console.log(JSON.parse(data))
            return {...state}
        default:

            return {...state}

    }
};

export  {reducer,initstate}