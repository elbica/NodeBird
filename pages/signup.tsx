import * as React from "react"
import AppLayout from "../components/AppLayout"
import Head from "next/head"

type ISignup = {}

export default function Signup({}: ISignup) {
	return (
		<>
			<Head>
				<title>회원가입</title>
			</Head>
			<AppLayout>회원가입 페이지</AppLayout>
		</>
	)
}
