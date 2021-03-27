import React, { useEffect, useLayoutEffect, useState } from 'react';
import './content.scss';
import ContentHeader from '../conent-header/ContentHeader';
import { useSelector, shallowEqual } from 'react-redux';
import ContentItem from '../../simpleUIComponents/content-item/ContentItem';

const Content = () => {
    const { data } = useSelector(s => s.global, shallowEqual);
    return (
        <div className='content'>
            <ContentHeader />
            <div className='content-body' style={{ height: 450 }}>
                {data?.map(item => {
                    return <ContentItem item={item} key={item.id} />
                })}
            </div>
        </div>
    )
};

export default Content;
