import React from "react";
import { AbServiceConsumer } from "../abservice-context";

const withAbService = (mapMethodToProps) => (Wrapped) => {
    return(props) => {
        return(
            <AbServiceConsumer>
                {
                    (abService) => {
                        const serviceProps = mapMethodToProps(abService);
                        return (
                            <Wrapped {...props} {...serviceProps} />
                        )
                    }
                }
            </AbServiceConsumer>
        )
    }
};

export default withAbService;