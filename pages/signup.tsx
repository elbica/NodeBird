import * as React from "react"
import AppLayout from "../components/AppLayout"
import Head from "next/head"
import { Button, Form, Input } from "antd"
import { useCallback, useState } from "react"
import useInput from "../hooks/useInput"
import styled from "styled-components"

type ISignup = {}

const ErrorMessage = styled.div`
	color: red;
`

export default function Signup({}: ISignup) {
	const [id, onChangeId] = useInput("")
	const [nickname, onChangeNick] = useInput("")
	const [password, onChangePass] = useInput("")
	const [passCheck, setPassCheck] = useState("")
	const [passError, setPassError] = useState(false)
	const onChangePassCheck = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setPassCheck(e.target.value)
			setPassError(e.target.value !== password)
		},
		[password]
	)

	const onSubmit = useCallback(() => {}, [id, password, passCheck])

	return (
		<>
			<Head>
				<title>회원가입</title>
			</Head>
			<AppLayout>
				<Form onFinish={onSubmit}>
					<div>
						<label htmlFor="user-id">아이디</label>
						<br />
						<Input name={"user-id"} value={id} required onChange={onChangeId} />
					</div>
					<div>
						<label htmlFor="user-nick">닉네임</label>
						<br />
						<Input
							name={"user-nick"}
							value={nickname}
							required
							onChange={onChangeNick}
						/>
					</div>
					<div>
						<label htmlFor="user-password">비밀번호</label>
						<br />
						<Input
							name={"user-password"}
							value={password}
							required
							onChange={onChangePass}
						/>
					</div>
					<div>
						<label htmlFor="user-password-check">비밀번호</label>
						<br />
						<Input
							name={"user-password-check"}
							value={passCheck}
							required
							onChange={onChangePassCheck}
						/>
						{passError && <ErrorMessage>비밀번호가 일치하지 않습니다</ErrorMessage>}
					</div>
					<Button type={"primary"} htmlType={"submit"}>가입하기</Button>
				</Form>
			</AppLayout>
		</>
	)
}
