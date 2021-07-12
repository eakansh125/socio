import React, { useState } from 'react'
import Stories from './Stories'
import Post from './Post'
import './Feed.css'
import PostBody from './PostBody'
import { AnimatedList } from 'react-animated-list';
import { useStateValue } from './StateProvider'
import { useEffect } from 'react'
import db from './firebase'

function Feed() {

    const [{user}, dispatch] = useStateValue();
    const [posts, setPosts]=useState([]);
    
    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp","desc")
        .onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({ id:doc.id, data:doc.data()  })))
        );
    }, []);

    return (
        <div className="feed">
            {/* Stories */}
            <Stories />
            {/* Post block */}
            <Post />
            {/* PostBody */}
            <div className="animated">            
            <AnimatedList animation={"grow"}>
                {posts.map((post) => (
                    
                        <PostBody 
                            key={post.id}
                            profilePic={post.data.profilePic}
                            message={post.data.message}
                            username={post.data.username}
                            timestamp={post.data.timestamp}
                            image={post.data.image}
                        />
                    
                ))}
            </AnimatedList>
            </div>
                
            

           {/*  <PostBody 
                profilePic={user.photoURL}
                message='Live at Wembley!!'
                timestamp='Timestamp...'
                username={user.displayName}
                image='https://images.unsplash.com/photo-1571310105000-9e021d7db3ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
            />
            <PostBody 
                profilePic={user.photoURL}
                message='Live at Wembley!!'
                timestamp='Timestamp...'
                username={user.displayName}
                
            />
            <PostBody 
                profilePic={user.photoURL}
                message='Live at Wembley!!'
                timestamp='Timestamp...'
                username={user.displayName}
                
            /> */}
        </div>
    )
}

export default Feed
