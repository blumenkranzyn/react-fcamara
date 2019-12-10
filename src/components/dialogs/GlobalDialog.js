import React from 'react';
import { Dialog } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../store/actions';

const GlobalDialog = () => {
    const dispatch = useDispatch();
    const { state, options } = useSelector(state => state.ui.dialog);

    return (
        <Dialog
            open={state}
            onClose={ev => dispatch(Actions.closeDialog())}
            aria-labelledby="fuse-dialog-title"
            {...options}
        />
    );
}

export default GlobalDialog;
