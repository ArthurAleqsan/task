import React from 'react';
import './sideBar.scss';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import Icon_1 from './icons/menu-1.svg';
import Icon_2 from './icons/menu-2.svg';
import Icon_3 from './icons/menu-3.svg';
import NavigationItem from '../../simpleUIComponents/navigation-item/NavigationItem';
import { navigate } from '../../../store/global/global.actions';

const SideBar = () => {
    const { title } = useSelector(s => s.global, shallowEqual); 
    const dispatch = useDispatch();

    const handleRedirect = (tabName) => {
        console.log(tabName);
        navigate(dispatch, tabName);
    }
    return (
        <div className='side-bar'>
            <nav className='nav'>
                <NavigationItem
                    url={Icon_1}
                    alt='Courses'
                    isActive={title == 'Courses'}
                    handleRedirect={() => handleRedirect('Courses')}
                />
                <NavigationItem
                    url={Icon_2}
                    alt='Shopping List'
                    isActive={title == 'Shopping List'}
                    handleRedirect={() => handleRedirect('Shopping List')}
                />
                <NavigationItem
                    url={Icon_3}
                    alt='Costumer'
                    isActive={title == 'Costumer'}
                    handleRedirect={() => handleRedirect('Costumer')}
                />
            </nav>
        </div>
    )
};

export default SideBar;
