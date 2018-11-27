import React from 'react';
import Header from './Header';

const Page = ({ children }) => (
    <div>
        <Header />
        <p>Page comp</p>
        {children}
    </div>
);

export default Page;
