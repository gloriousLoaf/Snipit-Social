import React, { Component } from 'react';
import AddPost from './AddPost';
import Post from './Post'

class listPost extends Component {
    render() {
        return (
            <div>
                <AddPost />
                ~~~LIST POST PAGE~~~
                <Post />
            </div>
        )
    }
}

export default listPost;