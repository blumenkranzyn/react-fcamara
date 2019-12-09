import React from 'react';

function PageCardedHeader(props) {


    return (
        <div className={props.classes.header}>
            {props.header && (
                props.header
            )}
        </div>
    )
}

export default PageCardedHeader;
