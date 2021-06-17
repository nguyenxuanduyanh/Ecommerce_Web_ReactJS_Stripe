import React, { memo } from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import isEqual from 'react-fast-compare'
import CartItem from './CartItem/CartItem';

const CartComponent = ({
    cart,
    handleEmptyCart,
    handleRemoveFromCart,
    handleUpdateCartQuantity
}) => {
    console.log('cart2', cart);
    const classes = useStyles();
    const isEmpty = (cart?.line_items ?? []).length === 0;

    const EmptyCart = () =>

        <Typography varient="subtitle1">You have no items in your shop cart, start adding some! </Typography>


    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} handleRemoveFromCart={handleRemoveFromCart} handleUpdateCartQuantity={handleUpdateCartQuantity} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={() => handleEmptyCart}>Empty cart</Button>
                    <Button className={classes.checkoutButton} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    )


    return (
        <Container>
            <div className={classes.toolbar}></div>
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    );
}

export const Cart = memo(CartComponent, isEqual);