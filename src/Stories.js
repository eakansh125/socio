import React from 'react'
import Story from './Story'
import './Stories.css'
import { useStateValue } from './StateProvider'

function Stories() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="stories">
            <Story 
                image="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                profileSrc={user.photoURL}
                //"https://yt3.ggpht.com/yti/APfAmoFEvinttI-VQr8la4-sA2ptvJCRthNEyYlVeLZaTg=s88-c-k-c0x00ffffff-no-rj-mo"
                title={user.displayName}   
            />
            <Story 
                image="https://images.unsplash.com/photo-1501694159270-7b55f5eb85fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Tyler_Joseph_ACL_Music_Festival_2015_%2822116527768%29.jpg/220px-Tyler_Joseph_ACL_Music_Festival_2015_%2822116527768%29.jpg"
                title="Tyler"
            />
            <Story 
                image="https://images.unsplash.com/photo-1600962815726-457c46a12681?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Linkin_Park-Rock_im_Park_2014-_by_2eight_3SC0327.jpg/220px-Linkin_Park-Rock_im_Park_2014-_by_2eight_3SC0327.jpg"
                title="Chester"
            />
            <Story 
                image="https://images.unsplash.com/photo-1578364249730-0c4ee16426fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Gregory_Alan_Isakov_performs_at_The_Fillmore_in_San_Francisco_on_February_14_2019.jpg/220px-Gregory_Alan_Isakov_performs_at_The_Fillmore_in_San_Francisco_on_February_14_2019.jpg"
                title="Gregory"
            />
            <Story 
                image="https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Jon_Bellion_live_in_Long_Island%2C_New_York_2019.jpg/220px-Jon_Bellion_live_in_Long_Island%2C_New_York_2019.jpg"
                title="Jon"
            />
        </div>
    )
}

export default Stories
