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
            label: 'About',
            icon: 'pi pi-fw pi-info-circle',
            url: '/about'
        }
    ];

    return(
        <Menubar model={items}></Menubar>
    )
}

export default Header;
