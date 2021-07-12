import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React, { useState } from 'react'
import './Post.css'
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

function Post() {

    const [{user}, dispatch] = useStateValue();

    const [input, setInput]=useState('');
    const [imageUrl, setImageUrl]=useState('');

    const handleSubmit = e => {
        e.preventDefault();

        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        setInput("");
        setImageUrl("");

    }

    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={user.photoURL} className="post__topAvatar"/>
                <form>
                    <input value={input} 
                    onChange={(event) => setInput(event.target.value)}
                    className="post__input" placeholder={`What's on your mind ${user.displayName}?`}/>
                    <input value={imageUrl}
                    onChange={(event) => setImageUrl(event.target.value)}
                    placeholder="image URL (Optional)"/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden button
                    </button>
                </form>
            </div>
            <div className="post__bottom">
                <div className="post__option">
                    <Videocam style={{color: 'red'}}/>
                    <h3>Live video</h3>
                </div>
                <div className="post__option">
                    <PhotoLibrary style={{color: 'green'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="post__option">
                    <InsertEmoticon style={{color: 'orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default Post
