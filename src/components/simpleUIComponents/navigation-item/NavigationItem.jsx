import React from 'react';
import PropType from 'prop-types';
import './navigationItem.scss';

const NavigationItem = ({ url, alt, isActive, handleRedirect }) => {
    return (
        <div className={isActive ? 'nav-item active-nav-item' : 'nav-item'}>
            <img src={url} alt={alt} className = 'nav-icon' onClick = {handleRedirect} />
        </div>
    )
};

NavigationItem.propTypes = {
    url: PropType.string.isRequired,
    alt: PropType.string.isRequired,
    isActive: PropType.bool.isRequired,
    handleRedirect: PropType.func.isRequired,
}

export default NavigationItem;

