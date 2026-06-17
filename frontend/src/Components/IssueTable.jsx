import React from 'react';
import IssueRow from './IssueRow.jsx';

const IssueTable = ({ issues, deleteIssue }) => {
    return (
        <div>
            <h3>Issues List</h3>
            {issues.length === 0 ? <p>No issues found.</p> : (
                <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Due</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issues.map(issue => (
                            <IssueRow key={issue._id} issue={issue} deleteIssue={deleteIssue} />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default IssueTable;