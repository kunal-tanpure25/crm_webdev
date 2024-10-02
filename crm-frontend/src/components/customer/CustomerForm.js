import React, { useState } from 'react';

const CustomerForm = ({ onSubmit, customer }) => {
    const [name, setName] = useState(customer?.name || '');
    const [email, setEmail] = useState(customer?.email || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, email });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CustomerForm;
