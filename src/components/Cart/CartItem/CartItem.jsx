import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './styles';

const CartItem = ({ item, handleRemoveFromCart, handleUpdateCartQuantity }) => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={item.media.source} className={classes.media}></CardMedia>
            <CardContent>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.CardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" >-</Button>
                    <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                    <Button type="button" size="small" >+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" handleRemoveFromCart={handleRemoveFromCart} >Remove</Button>
            </CardActions>
        </Card>
    );
}

export default CartItem;