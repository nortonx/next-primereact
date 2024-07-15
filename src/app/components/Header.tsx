"use client"

import { Menubar } from "primereact/menubar";
import type { MenuItem } from "@/types/menuItem.type";

const Header = () => {
    const items : MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            url: '/'
        },
        {
            label: 'Word Count',
            icon: 'pi pi-fw pi-pencil',
            url: '/word-count'
        },
        {
            label: 'Password Generator',
            icon: 'pi pi-fw pi-key',
            url: '/password-generator'
        },
        {
            label: 'Table Data',
            icon: 'pi pi-table',
            url: '/table-data'
        },
        {
            label: 'About',
            icon: 'pi pi-fw pi-info-circle',
            url: '/about'
        }
    ];

    return(
        <Menubar model={items} data-testid="header" className="mb-4"></Menubar>
    )
}

export default Header;
