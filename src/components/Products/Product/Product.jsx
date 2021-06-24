import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { useCallback } from "react";
import useStyles from './styles'
const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    // function
    const onAddCart = useCallback(() => {
        if (onAddToCart && typeof onAddToCart === 'function') {
            onAddToCart(product.id, 1)
        }
    }, [])

    // render
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}> </CardMedia>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {product.price.formatted}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary"></Typography >
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={onAddCart}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card >
    )
}

export default Product;