import React from 'react';
import {Dialog} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../../store/actions';

function FuseDialog(props)
{
    const dispatch = useDispatch();
    const state = useSelector(state => fuse.dialog.state);
    const options = useSelector(({fuse}) => fuse.dialog.options);

    return (
        <Dialog
            open={state}
            onClose={ev => dispatch(Actions.closeDialog())}
            aria-labelledby="fuse-dialog-title"
            {...options}
        />
    );
}

export default FuseDialog;
