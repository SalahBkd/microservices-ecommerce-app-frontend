import React, {useEffect} from 'react';
import {Button, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {fetchProducts} from "../redux/product/productActions";
import ProductCard from "../components/ProductCard";
import {connect} from "react-redux";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    productsContainer: {
        marginTop: theme.spacing(2)
    },
    title: {
        marginBottom: theme.spacing(2)
    },
    addBtn: {
        marginBottom: theme.spacing(3),
    }
}));

const ListProducts = ({productData, fetchProducts}) => {
    const classes = useStyles();
    const products = productData.products;

    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        products.length === 0 ? <Typography variant="h6">Aucune Données</Typography> :
            productData.loading ? (
                <Typography variant="h6">Chargement des Données...</Typography>
            ) : productData.error ? (
                <Typography variant="h6">ERREUR...</Typography>
            ) : (
                <Container className={classes.productsContainer}>
                    <Typography className={classes.title} variant="h5">Products</Typography>
                    <Link to="/addproduct" style={{textDecoration: "none"}}>
                        <Button variant="contained" color="primary" className={classes.addBtn}>ADD PRODUCT</Button>
                    </Link>
                    <Grid container>
                            {products.map(product => {
                                return (
                                    <Grid item xs={4}>
                                        <ProductCard product={product} />
                                    </Grid>
                                )
                            })}
                    </Grid>
                </Container>
            )
    );
};

const mapStateToProps = state => {
    return {
        productData: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // deleteProduct: (product) => dispatch(deleteProduct(product)),
        fetchProducts: () => dispatch(fetchProducts())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);
