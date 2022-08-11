import * as React from "react"
import AppLayout from "../components/AppLayout"
import Head from "next/head"

type IProfile = {}

export default function Profile({}: IProfile) {
	return (
		<>
			<Head>
				<title>프로필</title>
			</Head>
			<AppLayout>프로필 페이지</AppLayout>
		</>
	)
}
