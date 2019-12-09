import React from 'react';
import { makeStyles } from '@material-ui/styles';
import * as PropTypes from 'prop-types';
import PageCardedHeader from "./PageCardedHeader"

const drawerWidth = 140;
const headerHeight = 130;
const toolbarHeight = 64;
const headerContentHeight = headerHeight - toolbarHeight;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100%',
        position: 'relative',
        flex: '1 0 auto',
        height: 'auto',
        backgroundColor: theme.palette.background.default
    },
    innerScroll: {
        flex: '1 1 auto',
        height: '100%'
    },
    topBg: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: headerHeight,
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + theme.palette.primary.light + ' 100%)',
        backgroundSize: 'cover',
        pointerEvents: 'none'
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 1.2rem',
        flex: '1 1 100%',
        zIndex: 2,
        maxWidth: '100%',
        minWidth: 0,
        minHeight: 0,
        [theme.breakpoints.down('xs')]: {
            padding: '0 1.6rem'
        }
    },
    header: {
        height: headerContentHeight,
        minHeight: headerContentHeight,
        maxHeight: headerContentHeight,
        display: 'flex',
        color: theme.palette.primary.contrastText
    },
    headerSidebarToggleButton: {
        color: theme.palette.primary.contrastText
    },
    contentCard: {
        display: 'flex',
        flex: '1 1 100%',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
        minHeight: 0,
        borderRadius: '8px 8px 0 0'
    },
    toolbar: {
        height: toolbarHeight,
        minHeight: toolbarHeight,
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid ' + theme.palette.divider
    },
    content: {
        flex: '1 1 auto',
        height: '100%',
        overflow: 'auto',
        '-webkit-overflow-scrolling': 'touch'
    },
    sidebarWrapper: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 5,
        overflow: 'hidden',
        '&.permanent': {
            [theme.breakpoints.up('lg')]: {
                zIndex: 1,
                position: 'relative'
            }
        }
    },
    sidebar: {
        position: 'absolute',
        '&.permanent': {
            [theme.breakpoints.up('lg')]: {
                backgroundColor: 'transparent',
                position: 'relative',
                border: 'none',
                overflow: 'hidden'
            }
        },
        width: drawerWidth,
        height: '100%'

    },
    leftSidebar: {},
    rightSidebar: {},
    sidebarHeader: {
        height: headerHeight,
        minHeight: headerHeight,
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark,
        '&.permanent': {
            [theme.breakpoints.up('lg')]: {
                backgroundColor: 'transparent'
            }
        }
    },
    sidebarContent: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        [theme.breakpoints.up('lg')]: {
            overflow: 'auto',
            '-webkit-overflow-scrolling': 'touch'
        }
    },
    backdrop: {
        position: 'absolute'
    }
}));

const PageCarded = (props) => {

    const classes = useStyles(props);


    return (
        <div className={classes.root}>
            <div className={classes.topBg} />
            <div className="flex container w-full">
                <div className={classes.contentWrapper} >
                    <PageCardedHeader header={props.header} classes={classes} />
                    <div className={classes.contentCard}>
                        {props.content && (props.content)}
                    </div>
                </div>
            </div>
        </div>
    );
}

PageCarded.propTypes = {
    header: PropTypes.node,
    content: PropTypes.node,
};

PageCarded.defaultProps = {};

export default React.memo(PageCarded);
