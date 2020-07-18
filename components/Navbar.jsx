import {Menu, Icon, Dropdown} from "semantic-ui-react";
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
            <Dropdown text='Products' className="item">
                <Dropdown.Menu>
                    <Dropdown.Item text='pumps'/>
                    <Dropdown.Item text='wound dressings'/>
                    <Dropdown.Item text='canisters'/>
                </Dropdown.Menu>
            </Dropdown>
            <Link href="/"><Menu.Item>about</Menu.Item></Link>
            <Link href="/Contact"><Menu.Item>contact</Menu.Item></Link>
        </Menu>
    );
}