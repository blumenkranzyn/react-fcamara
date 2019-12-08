import React from 'react';
import {Snackbar, IconButton, Icon, SnackbarContent} from '@material-ui/core';
import {green, amber, blue} from '@material-ui/core/colors';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import * as Actions from '../../store/actions';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root   : {},
    success: {
        backgroundColor: green[600],
        color          : '#FFFFFF'
    },
    error  : {
        backgroundColor: theme.palette.error.dark,
        color          : theme.palette.getContrastText(theme.palette.error.dark)
    },
    info   : {
        backgroundColor: blue[600],
        color          : '#FFFFFF'
    },
    warning: {
        backgroundColor: amber[600],
        color          : '#FFFFFF'
    }
}));

function Message(props)
{
    const dispatch = useDispatch();
    const state = useSelector( state => state.message.state);
    const options = useSelector(state => state.message.options);

    const classes = useStyles();

    return (
        <Snackbar
            {...options}
            open={state}
            onClose={() => dispatch(Actions.hideMessage())}
            classes={{
                root: classes.root
            }}
            ContentProps={{
                variant        : 'body2',
                headlineMapping: {
                    body1: 'div',
                    body2: 'div'
                }
            }}
        >
            <SnackbarContent
                className={clsx(classes[options.variant])}
                message={
                    <div className="flex items-center">
                        {options.message}
                    </div>
                }
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => dispatch(Actions.hideMessage())}
                    >
                        <Icon>close</Icon>
                    </IconButton>
                ]}
            />
        </Snackbar>
    );
}

export default React.memo(Message);
