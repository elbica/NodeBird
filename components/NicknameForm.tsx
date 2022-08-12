import * as React from "react"
import { Form, Input } from "antd"

type INicknameForm = {};
export const NicknameForm = ({}: INicknameForm) => {
	return (
		<Form>
			<Input.Search addonBefore={"닉네임"} enterButton={"수정"}/>
		</Form>
	)
}