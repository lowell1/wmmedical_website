import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/global.css";

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
                <Component {...pageProps} />
            </main>
        </div>
    );
}
