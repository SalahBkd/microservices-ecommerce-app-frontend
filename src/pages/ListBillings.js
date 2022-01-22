import React from 'react';
import {Button, Container, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    btns: {
        display: "flex",
        flexDirection: "row",
        marginTop: theme.spacing(2),
    },
    btn: {
        marginLeft: theme.spacing(2)
    }
}));

const ListBillings = () => {
    const classes = useStyles();
    return (
        <Container>
            <div className={classes.btns}>
                <Button variant="contained" color="primary">Generate Bill</Button>
                <Button variant="contained" color="primary" className={classes.btn}>View Bill</Button>
            </div>
        </Container>
    );
};

export default ListBillings;
