import React from 'react';
import React, { useEffect } from 'react';
import PageNotFound from '../PageNotFound/PageNotFound';
const About= (props) => {
    useEffect(() => {
       
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <PageNotFound/>
        </>
    );
};

export default About;