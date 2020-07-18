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
                    <Link href="/products/Pump"><Dropdown.Item text='pumps'/></Link>
                    <Link href="/products/DressingKit"><Dropdown.Item text='wound dressings'/></Link>
                    <Link href="/products/Canister"><Dropdown.Item text='canisters'/></Link>
                </Dropdown.Menu>
            </Dropdown>
            <Link href="/"><Menu.Item>About</Menu.Item></Link>
            <Link href="/Contact"><Menu.Item>Contact</Menu.Item></Link>
        </Menu>
    );
}