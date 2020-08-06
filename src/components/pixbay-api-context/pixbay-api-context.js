import React from 'react';

const {
    Provider: PixbayApiProvider,
    Consumer: PixbayApiConsumer
} = React.createContext();

export { PixbayApiProvider,
         PixbayApiConsumer
    };