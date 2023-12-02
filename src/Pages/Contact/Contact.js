import React, { useContext } from 'react';
import { AuthContext } from '../../ContextAPi/UseContext';

const Contact = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    );
};

export default Contact;