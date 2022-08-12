import * as React from "react"
import { Button, Form, Input } from "antd"
import { useCallback, useState } from "react"
import Link from "next/link"
import styled from "styled-components"

type ILoginForm = {
	setIsLogined :  React.Dispatch<React.SetStateAction<boolean>>
}

const ButtonWrapper = styled.div`
	margin-top: 10px;
`
const FormWrapper = styled(Form)`
	padding: 10px;
`

export const LoginForm = ({setIsLogined}: ILoginForm) => {
	const [id, setId] = useState("")
	const [password, setPassword] = useState("")
	const onChangeId = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setId(e.target.value)
		},
		[]
	)
	const onChangePassword = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setPassword(e.target.value)
		},
		[]
	)

	const onSubmitForm = useCallback(
		() => {
			console.log(id, password)
			setIsLogined(true)
		},
		[id, password]
	)


	return (
		<FormWrapper onFinish={onSubmitForm}>
			<div>
				<label htmlFor="user-id">아이디</label>
				<br />
				<Input name="user-id" value={id} required onChange={onChangeId} />
			</div>
			<ButtonWrapper>
				<label htmlFor="user-password">아이디</label>
				<br />
				<Input
					name="user-password"
					type="password"
					value={password}
					required
					onChange={onChangePassword}
				/>
			</ButtonWrapper>
			<div>
				<Button type={"primary"} htmlType={"submit"} loading={false}>로그인</Button>
				<Link href={"/signup"}><a><button>회원가입</button></a></Link>
			</div>
		</FormWrapper>
	)
}
