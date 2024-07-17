"use client"

import { Menubar } from "primereact/menubar";
import type { MenuItem } from "@/types/menuItem.type";
import { useRouter } from "next/navigation";

const Header = () => {

    const router = useRouter();
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            url: '/',
            command: () => {
                router.push('/')
            }
        },
        {
            label: 'Word Count',
            icon: 'pi pi-fw pi-pencil',
            url: '/word-count',
            command: () => {
                router.push('/word-count')
            }
        },
        {
            label: 'Password Generator',
            icon: 'pi pi-fw pi-key',
            url: '/password-generator',
            command: () => {
                router.push('/password-generator')
            }
        },
        {
            label: 'Table Data',
            icon: 'pi pi-table',
            url: '/table-data',
            command: () => {
                router.push('/table-data')
            }
        },
        {
            label: 'About',
            icon: 'pi pi-fw pi-info-circle',
            url: '/about',
            command: () => {
                router.push('/about')
            }
        }
    ];

    return(
        <Menubar model={items} data-testid="header" className="mb-4"></Menubar>
    )
}

export default Header;
