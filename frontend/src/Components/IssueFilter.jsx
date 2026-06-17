import React from 'react';

const IssueFilter = ({ setFilterStatus }) => {
    return (
        <div style={{ margin: '15px 0' }}>
            <label style={{ marginRight: '10px' }}>Filter by Status: </label>
            <select onChange={(e) => setFilterStatus(e.target.value)}>
                <option value="All">All</option>
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Closed">Closed</option>
            </select>
        </div>
    );
};

export default IssueFilter;