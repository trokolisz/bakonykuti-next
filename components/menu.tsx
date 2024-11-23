/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Link } from "lucide-react";


interface MenuItem {
    name: string;
    components: { 
        title: string; 
        href: string;
        subComponents?: { title: string; href: string; }[] 
    }[];
}


export default function Menu({ items }: { items: MenuItem[] }) {
    return (
        <Menubar className="bg-green-600 ">
            {items.map((item, index) => (
                <MenubarMenu key={index}>
                    <MenubarTrigger>{item.name}</MenubarTrigger>
                    <MenubarContent className="bg-green-400">
                        {item.components.map((component, subIndex) => (
                            <Link key={subIndex} href={component.href}>
                                <MenubarItem>
                                    {component.title}
                                    {component.subComponents && (
                                        <>
                                            <MenubarSeparator />
                                            <MenubarSub>
                                                <MenubarSubTrigger></MenubarSubTrigger>
                                                <MenubarSubContent className="bg-green-400">
                                                    {component.subComponents.map((subComponent, subSubIndex) => (
                                                        <a key={subSubIndex} href={subComponent.href}>
                                                            <MenubarItem>
                                                                {subComponent.title}
                                                            </MenubarItem>
                                                        </a>
                                                    ))}
                                                </MenubarSubContent>
                                            </MenubarSub>
                                        </>
                                    )}
                                </MenubarItem>
                            </Link>
                        ))}
                    </MenubarContent>
                </MenubarMenu>
            ))}
        </Menubar>
    )
}
