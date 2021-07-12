import React from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css'
import { EventBusy, Group, GroupWork, LiveTv, LocalHospital, Storefront } from '@material-ui/icons'
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL}
            //'https://yt3.ggpht.com/yti/APfAmoFEvinttI-VQr8la4-sA2ptvJCRthNEyYlVeLZaTg=s88-c-k-c0x00ffffff-no-rj-mo' 
            title={user.displayName}/>
            <SidebarRow Icon={LocalHospital} title='Covid 19 information center'/>
            <SidebarRow Icon={Group} title='Friends'/>
            <SidebarRow Icon={GroupWork} title='Groups'/>
            <SidebarRow Icon={Storefront} title='Marketplace'/>
            <SidebarRow Icon={LiveTv} title='Watch'/>
            <SidebarRow Icon={EventBusy} title='Events'/>
        </div>
    )
}

export default Sidebar
