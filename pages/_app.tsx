import "../styles/globals.css"
import "antd/dist/antd.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import wrapper from "../store"

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
