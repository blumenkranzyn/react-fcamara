import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { Link } from "react-router-dom"
import PageBreadcrumbs from "./PageBreadcrumbs";
import { Fade } from 'react-reveal';

const PageHeaderSimple = ({ breadcrumbItems, icon, titlePage, buttonLabel, buttonLabelMobile, buttonType, action = null, linkTo = null }) => {


    return (
        <>
       
            
        <div className="w-full p-4">
                <div className="flex flex-1 w-full items-center justify-between">
                    {titlePage && (
                        <div className="flex items-center">
                            <Fade delay={300} left>
                                <Typography className="hidden text-white sm:flex" variant="h6">{titlePage}</Typography>
                            </Fade>
                        </div>
                    )}


                    {buttonType && buttonType.toUpperCase() === "HANDLEMODAL" ? (
                        <Fade delay={400} right>
                            <Button onClick={action} className="whitespace-no-wrap" variant="contained" color="secondary">
                                <span className="hidden sm:flex">{buttonLabel}</span>
                                <span className="flex sm:hidden">{buttonLabelMobile}</span>
                            </Button>
                        </Fade>
                    ) : (
                            buttonLabel && (
                                <Fade delay={400} bottom>
                                    <Button component={Link} to={linkTo} className="whitespace-no-wrap" variant="contained" color="secondary">
                                        <span className="hidden sm:flex">{buttonLabel}</span>
                                        <span className="flex sm:hidden">{buttonLabelMobile}</span>
                                    </Button>
                                </Fade>
                            ))}

                    {breadcrumbItems && (
                        <PageBreadcrumbs
                            items={breadcrumbItems}
                        />
                    )}
                </div>

            </div>
       
     
        </>
    )
}

export default PageHeaderSimple