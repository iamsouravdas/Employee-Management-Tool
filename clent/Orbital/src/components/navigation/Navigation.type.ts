export interface NavigationData {
    sidebarItems: NavigationItem[];
    avatar: string;
    icons?: icons[];
}

interface NavigationItem {
    name: string;
    route: string;
}

interface icons {
    name: string;
    icon: React.ReactNode;
    route?: string;
    action?: () => void;
};