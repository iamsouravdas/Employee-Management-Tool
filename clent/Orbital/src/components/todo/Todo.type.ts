export interface Todo {
    id: number;
    title: string;
    date: string;
    time: string;
    description: string;
    type: 'task' | 'event';
}