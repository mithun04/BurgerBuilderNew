import React from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = ( WrappedComponent ) => {
    return ( props ) => {
        return (
            <Aux>
                <Modal show>
                    something did not work!
                </Modal>
                <WrappedComponent {...props} />
            </Aux>
        )
    }
};

export default withErrorHandler;