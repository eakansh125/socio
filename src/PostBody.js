import { Avatar } from '@material-ui/core'
import {  ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUpSharp } from '@material-ui/icons'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React from 'react'
import './PostBody.css'


function PostBody({profilePic, image, username, timestamp, message}) {
    return (
        <div className="postbody">
            <div className="postbody__top">
                <Avatar src={profilePic} className="postbody__avatar"/>
                <div className="postbody__topInfo">
                    <h3>{username}</h3>
                    {/* <p>{timestamp}</p> */}
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="postbody__bottom">
                <p>{message}</p>
            </div>
            <div className="postbody__image">
                <img src={image} alt="" />
            </div>

            <div className="postbody__options">
                <div className="postbody__option">
                    <ThumbUpSharp />
                    <p>Like</p>
                </div>
                <div className="postbody__option">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className="postbody__option">
                    <NearMe />
                    <p>Share</p>
                </div>
                <div className="postbody__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default PostBody
