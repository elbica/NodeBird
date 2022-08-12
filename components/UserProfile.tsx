import * as React from "react"
import { Avatar, Button, Card } from "antd"
import { useCallback } from "react"

type IUserProfile = {
	setIsLogined :  React.Dispatch<React.SetStateAction<boolean>>

}
export const UserProfile = ({setIsLogined}: IUserProfile) => {
	const onLogOut = useCallback(
		() => {
			setIsLogined(false)
		},
		[setIsLogined]
	)

	return (
		<Card
			actions={[
				<div key={"twit"}>
					짹짹 <br />0
				</div>,
				<div key={"followings"}>
					팔로잉 <br />0
				</div>,
				<div key={"followers"}>
					팔로워 <br />0
				</div>
			]}
		>
			<Card.Meta title={"Elbica"} avatar={<Avatar>ZC</Avatar>} />
			<Button onClick={onLogOut}>로그아웃</Button>
		</Card>
	)
}
