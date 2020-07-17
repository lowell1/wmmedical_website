import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head><title>WM Medical</title></Head>
            <header></header>
            <main><Component {...pageProps} /></main>
        </div>
    );
}
