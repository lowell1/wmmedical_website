import {Menu, Icon} from "semantic-ui-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <Menu stackable>
            <Menu.Item><Link href="/"><Icon link name="home"/></Link></Menu.Item>
            <Menu.Item><Link href="/">products</Link></Menu.Item>
            <Menu.Item><Link href="/">about</Link></Menu.Item>
            <Menu.Item><Link href="/Contact">contact us</Link></Menu.Item>
        </Menu>
    );
}