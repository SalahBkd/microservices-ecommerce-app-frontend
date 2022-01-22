import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        marginBottom: theme.spacing(2)
    },
    media: {
        height: 80,
    },
    price: {
        display: "flex",
        flexDirection: "row"
    },
    moneyIcon: {
        marginTop: theme.spacing(0.5),
        marginLeft: theme.spacing(0.5)
    }
}));

const ProductCard = ({product}) => {
    const classes = useStyles();
    console.log(product)
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.description}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <div className={classes.price}>
                            <Typography gutterBottom variant="h6" component="h2">
                                Price: {product.price}
                            </Typography>
                            <MonetizationOnOutlinedIcon className={classes.moneyIcon}/>
                        </div>
                        <Typography variant="body2" color="textSecondary" component="p" >
                            Quantity: {product.quantity}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {/*<CardActions>*/}
                {/*    <Button size="small" color="primary">*/}
                {/*        Share*/}
                {/*    </Button>*/}
                {/*    <Button size="small" color="primary">*/}
                {/*        Learn More*/}
                {/*    </Button>*/}
                {/*</CardActions>*/}
            </Card>
        </>
    );
};

export default ProductCard;
