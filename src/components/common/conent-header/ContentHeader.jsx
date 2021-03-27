import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './contentHeader.scss';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import FilterTab from '../../simpleUIComponents/filter-tab/FilterTab';
import { Col, Row } from 'antd';
import { setData } from '../../../store/global/global.actions';

export const ContentHeader = () => {
    const { title, newData, popular, favorite } = useSelector(s => s.global, shallowEqual);
    const [filterTab, setFilterTab] = useState('Popular');
    const dispatch = useDispatch();
    useEffect(() => {
        setData(dispatch, popular);
    }, []);
    const handleFilterItemClick = (tabname) => {
        setFilterTab(tabname);
        switch (tabname) {
            case 'New':
                setData(dispatch, newData);
                break;
            case 'Favorite':
                setData(dispatch, favorite);
                break;
            default:
                setData(dispatch, popular);
        }
    }


    return (
        <header className='header'>
            <h1 className='title'>{title}</h1>
            <Row className='filter-tabs-container'>
                <Col span={8}>
                    <FilterTab
                        text='Popular'
                        isActive={filterTab == 'Popular'}
                        handleClick={() => handleFilterItemClick('Popular')}
                    />
                </Col>
                <Col span={8}>
                    <FilterTab
                        text='Favorite'
                        isActive={filterTab == 'Favorite'}
                        handleClick={() => handleFilterItemClick('Favorite')}
                    />
                </Col>
                <Col span={8}>
                    <FilterTab
                        text='New'
                        isActive={filterTab == 'New'}
                        handleClick={() => handleFilterItemClick('New')}
                    />
                </Col>
            </Row>
        </header>
    )
}

ContentHeader.propTypes = {

};

export default ContentHeader;
