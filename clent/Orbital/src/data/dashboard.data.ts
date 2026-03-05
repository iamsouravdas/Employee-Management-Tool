import type { EmailProps } from "../components/email/Email.type";
import type { Todo } from "../components/todo/Todo.type";

export const mockEmailProps: EmailProps = {
    data: {
        totalEmails: 145, unreadEmails: 3, sent: 42, drafts: 3, spam: 12, trash: 8,
        emails: [
            { id: 1, subject: "Project Update: Q3 Deliverables", sender: "sarah.connor@techcorp.com", time: "10:30 AM", content: "Hi team, just wanted to share the latest numbers for our Q3 sprint. We are ahead of schedule! Please review the attached deck." },
            { id: 2, subject: "Lunch today?", sender: "john.smith@example.com", time: "09:15 AM", content: "Are we still on for tacos at noon? Let me know if you need to reschedule." },
            { id: 3, subject: "Your invoice #99021 is ready", sender: "billing@software-service.io", time: "Yesterday", content: "Please find attached your monthly invoice for cloud hosting services. Due in 15 days." },
            { id: 4, subject: "URGENT: Server Outage", sender: "devops@company.com", time: "Yesterday", content: "The production database is experiencing high latency. The team is currently investigating." },
            { id: 5, subject: "Welcome to our Newsletter!", sender: "hello@startup.io", time: "Oct 12", content: "Thanks for subscribing. Every week we will send you the top 5 design trends." },
            { id: 6, subject: "Re: Contract Revisions", sender: "legal@lawfirm.com", time: "Oct 11", content: "I've reviewed the redlines. Please see my comments inline on page 4." },
            { id: 7, subject: "Team Offsite Planning", sender: "hr@techcorp.com", time: "Oct 10", content: "Please vote on the destination for our annual winter offsite! Survey linked below." }
        ],
        sentList: [], draftsList: []
    }
};

export const initialTasks: Todo[] = [
    { id: 1, title: "Daily Standup", date: "2023-10-25", time: "10:00 AM", description: "Sync with the engineering team on yesterday's progress.", type: "event" },
    { id: 2, title: "Review Pull Requests", date: "2023-10-25", time: "11:30 AM", description: "Review authentication flow PRs from Junior devs.", type: "task" },
    { id: 3, title: "Client Demo: Acme Corp", date: "2023-10-25", time: "02:00 PM", description: "Showcase the new dashboard features to the Acme stakeholders.", type: "event" },
    { id: 4, title: "Update Documentation", date: "2023-10-25", time: "04:00 PM", description: "Update API docs for the new user endpoints.", type: "task" },
    { id: 5, title: "1:1 with Manager", date: "2023-10-26", time: "10:30 AM", description: "Discuss Q4 goals and career progression.", type: "event" },
    { id: 6, title: "Fix Navbar Bug", date: "2023-10-26", time: "01:00 PM", description: "Resolve mobile overflow issue on the main navigation.", type: "task" },
    { id: 7, title: "Design Handoff", date: "2023-10-27", time: "09:00 AM", description: "Meeting with UI/UX team to get assets for the checkout page.", type: "event" },
    { id: 8, title: "Database Migration", date: "2023-10-28", time: "12:00 AM", description: "Migrate user tables to the new cluster. Expecting 15m downtime.", type: "task" },
    { id: 9, title: "All-Hands Meeting", date: "2023-10-29", time: "03:00 PM", description: "Company-wide updates and Q&A with the CEO.", type: "event" },
    { id: 10, title: "Submit Expense Reports", date: "2023-10-31", time: "05:00 PM", description: "Upload receipts for the tech conference travel.", type: "task" }
];