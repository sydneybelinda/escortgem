import React from 'react'

import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <React.Fragment>


            {children}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}

export default Layout;