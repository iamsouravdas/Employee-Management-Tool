interface ReceivedEmail {
    id: number;
    subject: string;
    sender: string;
    time: string;
    content: string;
}

interface SentEmail {
    id: number;
    subject: string;
    recipient: string;
    time: string;
    content: string;
}

export interface EmailProps {
    data: {
        emails: ReceivedEmail[];
        sentList: SentEmail[];
        draftsList: SentEmail[];
        totalEmails: number;
        unreadEmails: number;
        sent: number;
        drafts: number;
        spam: number;
        trash: number;
    };
}