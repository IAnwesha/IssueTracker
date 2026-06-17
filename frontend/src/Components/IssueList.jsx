import React, { useState, useEffect } from 'react';
import IssueTable from './IssueTable.jsx';
import IssueAdd from './IssueAdd.jsx';
import IssueFilter from './IssueFilter.jsx';

const IssueList = () => {
    const [issues, setIssues] = useState([]);
    const [filterStatus, setFilterStatus] = useState('All');

    const fetchIssues = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/issues');
            const data = await response.json();
            setIssues(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchIssues();
    }, []);

    const deleteIssue = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/issues/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setIssues(issues.filter(issue => issue._id !== id));
            }
        } catch (error) {
            console.error("Error deleting issue:", error);
        }
    };

    const filteredIssues = issues.filter(issue => 
        filterStatus === 'All' ? true : issue.status === filterStatus
    );

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Issue Tracker</h1>
            
            {/* The main flex container that splits the page layout */}
            <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
                
                {/* LEFT COLUMN: Issues Table & Filter */}
                <div style={{ flex: '2', minWidth: '0' }}>
                    <IssueFilter setFilterStatus={setFilterStatus} />
                    <IssueTable issues={filteredIssues} deleteIssue={deleteIssue} />
                </div>
                
                {/* RIGHT COLUMN / CORNER: Create Form */}
                <div style={{ 
                    flex: '1', 
                    backgroundColor: '#f9f9f9', 
                    padding: '20px', 
                    borderRadius: '8px', 
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                    position: 'sticky',
                    top: '20px'
                }}>
                    <IssueAdd fetchIssues={fetchIssues} />
                </div>

            </div>
        </div>
    );
};

export default IssueList;