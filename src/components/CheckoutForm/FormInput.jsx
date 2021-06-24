import React from 'react';
import { useController } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

const FormInput = ({ name, label, required }) => {

    const {
        field: { ref, ...inputProps },
        fieldState: { invalid, error },
    } = useController({ name });

    // render
    return (
        <div>
            <Grid item xs={12} sm={12}>
                <TextField label={label} ref={ref} {...inputProps} error={invalid} />
                {error && <div> {error.message}</div>}
            </Grid>
        </div>

    );
}

export default FormInput;