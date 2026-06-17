import React, { useState } from 'react';

const IssueAdd = ({ fetchIssues }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Low');
    const [due, setDue] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newIssue = { title, description, priority, due, status: 'Open' };

        try {
            const response = await fetch('http://localhost:5000/api/issues', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newIssue)
            });

            if (response.ok) {
                setTitle('');
                setDescription('');
                setPriority('Low');
                setDue('');
                fetchIssues(); // Refresh the list
            } else {
                alert("Failed to submit issue");
            }
        } catch (error) {
            console.error("Error creating issue:", error);
            alert("Failed to submit issue");
        }
    };

    return (
        <div>
            <h3>Create New Issue</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <label>Priority: 
                    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </label>
                <input type="text" placeholder="Due Info (e.g. 3 days)" value={due} onChange={(e) => setDue(e.target.value)} />
                <button type="submit">Submit Issue</button>
            </form>
        </div>
    );
};

export default IssueAdd;