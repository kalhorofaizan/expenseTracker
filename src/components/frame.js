import React,{Component} from 'react'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'
import {Box} from '@material-ui/core'
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    centerComp:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
        flexDirection:"column"
    }
}))




function Frame(props) {
    const classes = useStyles();
    return (
        <Container  >
            <Box className={classes.centerComp} >
               {/*<Paper style={{padding:10}} >*/}
                   {props.children}
               {/*</Paper>*/}
            </Box>

        </Container>
    );
}

export default Frame;
