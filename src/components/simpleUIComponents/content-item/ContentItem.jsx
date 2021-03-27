import React from 'react';
import './content-item.scss';
import PropType from 'prop-types';
import PlayIcon from './play.svg';
const ContentItem = ({ item }) => {
    return (
        <div className='content-item'>
            <img src={item.image} alt={item.name} className = 'bg-image' />
            <div className='content-desc'>
                <div className='content-desc-header'>
                    <div className = 'content-col left-col'>
                        <span>{item.name}</span>
                        <span>{item.lessonsCount} lessons</span>
                    </div>
                    <div className = 'content-col right-col'>
                        <span>{item.duration} min</span>
                    </div>
                </div>
                <div className = 'content-dec-footer'>
                    <div className = 'play-btn'>
                        <img src = {PlayIcon} alt =' play' />
                    </div>
                </div>
            </div>
        </div>
    )
};

ContentItem.propTypes = {
    item: PropType.object.isRequired,
};

export default ContentItem;
