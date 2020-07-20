import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/global.css";
import {Container} from "semantic-ui-react";

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>WM Medical</title>
            </Head>
            <header>
                <Navbar/>
            </header>
            <main>
                <Container>
                    <Component {...pageProps} />
                </Container>
            </main>
        </div>
    );
}
