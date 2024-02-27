import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from
'@material-ui/icons'
import React from 'react'
import './Feed.css'
import InputOption from './InputOption'
import Post from './Post'


const Feed = () => {
    return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <Create />
                <form>
                    <input type="text"/>
                    <button type="submit">Send</button>
                </form>
    </div>
            <div className="feed__inputOptions">
                <InputOption Icon={Image} title="Photo"
                    color="#70B5F9" />
                <InputOption Icon={Subscriptions} title="Video"
                    color="#E7A33E" />
                <InputOption Icon={EventNote} title="Event"
                    color="#C0CBCD" />
                <InputOption Icon={CalendarViewDay} title="Write
                    Article" color="#7FC15E" />
            </div>
        </div>
        <Post name="Manmohan Karingula" description="This is a test"
            message="This is awesome thing to do" />    
    </div>
    )
    }
export default Feed