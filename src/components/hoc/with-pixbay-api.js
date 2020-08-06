import React from 'react';
import {PixbayApiConsumer} from '../pixbay-api-context/pixbay-api-context'

const withPixbayApi = () => (Wrapped) => {
    return (props) => {
        return (
            <PixbayApiConsumer>
                {
                    (pixbayApi)=>{
                        return(<Wrapped {...props} pixbayApi={pixbayApi}/>);
                    }
                }
            </PixbayApiConsumer>
        );
    }
}

export default withPixbayApi;