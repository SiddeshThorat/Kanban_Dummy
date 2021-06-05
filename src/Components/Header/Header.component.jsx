import React from 'react';
import './Header.styles.css';

const Header = ({children}) => (
    <div className="headerContainer">
        {children}
    </div>
)

export default Header;