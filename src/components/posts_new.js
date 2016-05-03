import React, { Component } from 'react';
import { reduxForm } from 'redux-form'

class PostsNew extends Component {
    render() {
        return (
            <div>Create Form</div>

        );
    }
}

export default reduxFrom({
    form: 'PostNew',
    fields: ['title', 'categories', 'content']
})(PostsNew);