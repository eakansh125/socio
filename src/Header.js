import { Search } from '@material-ui/icons'
import React from 'react'
import './Header.css'
import HomeIcon from '@material-ui/icons/Home';
import TvIcon from '@material-ui/icons/Tv';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleIcon from '@material-ui/icons/People';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AppsIcon from '@material-ui/icons/Apps';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}, dispatch] = useStateValue();
    
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
                 alt="fblogo"
                 />
                 <div className="header__input">
                    <Search />
                    <input placeholder="Search Facebook"/>
                 </div>
            </div>
            <div className="header__middle">
                <div className="header__options header__options--active">
                    <HomeIcon />
                </div>
                <div className="header__options">
                    <TvIcon />
                </div>
                <div className="header__options">
                    <StorefrontIcon />
                </div>
                <div className="header__options">
                    <PeopleIcon />
                </div>
                <div className="header__options">
                    <SportsEsportsIcon />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                    <IconButton>
                        <AppsIcon />
                    </IconButton>
                    <IconButton>
                        <MessageIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                
            </div>
        </div>
    )
}

export default Header
