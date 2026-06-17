import React from 'react';

const IssueRow = ({ issue, deleteIssue }) => {
    return (
        <tr>
            <td>{issue.title}</td>
            <td>{issue.description}</td>
            <td>{issue.priority}</td>
            <td>{issue.status}</td>
            <td>{issue.due || 'N/A'}</td>
            <td>
                <button onClick={() => deleteIssue(issue._id)} style={{ backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer', padding: '5px 10px' }}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default IssueRow;