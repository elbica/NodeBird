import * as React from "react"
import AppLayout from "../components/AppLayout"
import Head from "next/head"
import { NicknameForm } from "../components/NicknameForm"
import { FollowList } from "../components/FollowList"

type IProfile = {}

export default function Profile({}: IProfile) {
	return (
		<>
			<Head>
				<title>내 프로필</title>
			</Head>
			<AppLayout>
				<NicknameForm/>
				<FollowList header={"팔로워 목록"} data={[{nickname:"dummy"}]}/>
				<FollowList header={"팔로잉 목록"} data={[{nickname:"dummy"}]}/>
			</AppLayout>
		</>
	)
}
