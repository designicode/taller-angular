export interface IMenu {
    name: string;
    link?: string;
    submenu: {
        name: string;
        link: string;
    }[];
    showSubmenu: boolean;
}