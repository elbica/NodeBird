import type { NextPage } from "next"
import styles from "../styles/Home.module.css"
import AppLayout from "../components/AppLayout"
import * as React from "react"
import Head from "next/head"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Hello</title>
			</Head>
			<AppLayout>hello Node Bird</AppLayout>
		</>
	)
}

export default Home
