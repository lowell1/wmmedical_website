import {Menu, Icon, Dropdown} from "semantic-ui-react";
import Link from "next/link";

const styles = {marginBottom: "2vh"};

export default function Navbar() {
    return (
        <Menu stackable style={styles}>
            <Link href="/">
                <Menu.Item>
                    <Icon link name="home"/>
                    <i className="hidden">home</i>
                </Menu.Item>
            </Link>
            <Dropdown text='Products' className="item">
                <Dropdown.Menu>
                    <Link href="/products/pump"><Dropdown.Item text='pumps'/></Link>
                    <Link href="/products/dressing_kit"><Dropdown.Item text='wound dressings'/></Link>
                    <Link href="/products/canister"><Dropdown.Item text='canisters'/></Link>
                </Dropdown.Menu>
            </Dropdown>
            <Link href="/"><Menu.Item>About</Menu.Item></Link>
            <Link href="/contact"><Menu.Item>Contact</Menu.Item></Link>
        </Menu>
    );
}