import {Menu, Icon} from "semantic-ui-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <Menu stackable>
            <Link href="/">
                <Menu.Item>
                    <Icon link name="home"/>
                    <i className="hidden">home</i>
                </Menu.Item>
            </Link>
            <Link href="/"><Menu.Item>products</Menu.Item></Link>
            <Link href="/"><Menu.Item>about</Menu.Item></Link>
            <Link href="/Contact"><Menu.Item>contact</Menu.Item></Link>
        </Menu>
    );
}