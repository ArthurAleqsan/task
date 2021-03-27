import React from 'react';
import './filterTab.scss';
import PropType from 'prop-types';

const FilterTab = ({ text, isActive, handleClick }) => {
    return (
        <div className={isActive ? 'filter-tab filter-active-tab' : 'filter-tab'}>
            <span onClick={handleClick}>{text}</span>
            <div style={{ visibility: isActive ? 'unset' : 'hidden' }} className = 'bottom-border'></div>
        </div>
    )
};

FilterTab.propTypes = {
    text: PropType.string.isRequired,
    isActive: PropType.bool.isRequired,
};

export default FilterTab;
