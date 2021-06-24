import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product.jsx'
import useStyles from './styles'

const Products = ({ products, onAddToCart }) => {

    const classes = useStyles();
    if (products.length === 0) return <p>Loading...</p>;
    return (
        < main className={classes.content}>
            <div className={classes.toolbar}></div>
            <Grid container justify='center' spacing={4}>
                {products.length > 0 && products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}></Product>
                    </Grid>
                ))}
            </Grid>
        </main >

    )
}
export default Products;