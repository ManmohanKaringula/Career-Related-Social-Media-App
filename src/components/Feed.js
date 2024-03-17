import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from
'@material-ui/icons'
import React from 'react'
import './Feed.css'
import InputOption from './InputOption'
import Post from './Post'
import {useState, useEffect} from 'react'

import { db } from '../firebaseConfig'
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';


const Feed = () => {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })));
        });

        // Return a cleanup function to unsubscribe when component unmounts
        return () => unsubscribe();
    }, []);

    const sendPost = async (e) => {
        e.preventDefault();
        try {
            // Add a new document to the "posts" collection
            await addDoc(collection(db, 'posts'), {
                name: 'Manmohan Karingula',
                description: 'This is a test',
                message: input,
                photoUrl: '',
                timestamp: serverTimestamp()
            });
            setInput('');
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    }

    return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <Create />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                    <button onClick={sendPost} type="submit">Send</button>
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
        {posts.map(({id, data}) =>(
            <Post
                key={id}
                name={data.name}
                description={data.description}
                message={data.message}
                photoUrl={data.photoUrl}
            />
        ))}
    </div>
    )
    }
export default Feed