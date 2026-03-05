import React, { useState } from 'react';
import type { EmailProps } from './Email.type';
import './Email.styles.css';

type SingleEmail = EmailProps['data']['emails'][0];

const EmailComponent: React.FC<EmailProps> = ({ data }) => {
    const [selectedEmail, setSelectedEmail] = useState<SingleEmail | null>(null);
    const { unreadEmails, emails } = data;

    return (
        <div className="email-module">
            <div className="dashboard-header">
                <h2>Inbox ({unreadEmails})</h2>
                <button className="btn-primary" onClick={() => alert("Compose coming soon!")}>+ Compose</button>
            </div>

            {/* The Split Container */}
            <div className="email-split-container">

                {/* Left Pane: Email List */}
                <div className={`email-list-pane ${selectedEmail ? 'shrunk' : ''}`}>
                    <ul className="email-list">
                        {emails.map((email) => (
                            <li
                                key={email.id}
                                className={`email-item ${selectedEmail?.id === email.id ? 'active' : ''}`}
                                onClick={() => setSelectedEmail(email)}
                            >
                                <img src={`https://ui-avatars.com/api/?name=${email.sender}&background=random&color=fff`} alt="avatar" className="email-avatar" />
                                <div className="email-summary">
                                    <div className="email-subject-row">
                                        <span className="email-subject">{email.subject}</span>
                                        <span className="email-time">{email.time}</span>
                                    </div>
                                    <div className="email-sender">From: {email.sender}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Pane: Email Detail (Inline Offcanvas) */}
                {selectedEmail && (
                    <div className="email-detail-pane">
                        <div className="detail-header">
                            <h3>{selectedEmail.subject}</h3>
                            <button className="btn-icon" onClick={() => setSelectedEmail(null)}>✕</button>
                        </div>
                        <div className="detail-meta">
                            <img src={`https://ui-avatars.com/api/?name=${selectedEmail.sender}&background=random&color=fff`} alt="avatar" className="email-avatar" />
                            <div>
                                <div><strong>From:</strong> {selectedEmail.sender}</div>
                                <div className="email-time">{selectedEmail.time}</div>
                            </div>
                        </div>
                        <div className="detail-body">
                            {selectedEmail.content}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmailComponent;