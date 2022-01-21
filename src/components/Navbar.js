import React from 'react';
import {AppBar, Button, makeStyles, Toolbar, Typography,} from "@material-ui/core";
import {useKeycloak} from "@react-keycloak/web";

const useStyles = makeStyles((theme) => ({
    navbar: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const { keycloak, initialized } = useKeycloak();

    return (
        <div className={classes.navbar}>
            <AppBar position="static" elevation={0}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Microservices App
                    </Typography>
                    {!keycloak.authenticated && (
                        <Button color="inherit" onClick={() => keycloak.login()}>Login</Button>
                    )}
                    {!!keycloak.authenticated && (
                        <>
                            <Button color="inherit">Customers</Button>
                            <Button color="inherit">Products</Button>
                            <Button color="inherit">Billing</Button>
                            <Button color="inherit" onClick={() => keycloak.logout()}>Logout ({keycloak.tokenParsed.preferred_username})</Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
