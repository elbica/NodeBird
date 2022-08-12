import Link from "next/link"
import React, { useState } from "react"
import { Col, Input, Menu, Row } from "antd"
import { UserProfile } from "./UserProfile"
import { LoginForm } from "./LoginForm"

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [isLogined, setIsLogined] = useState(false)
	return (
		<div>
			<Menu mode="horizontal">
				<Menu.Item>
					<Link href="/">
						<a>노드버드</a>
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link href="/profile">
						<a>프로필</a>
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Input.Search enterButton style={{ verticalAlign: "middle" }} />
				</Menu.Item>
				<Menu.Item>
					<Link href="/signup">
						<a>회원가입</a>
					</Link>
				</Menu.Item>
			</Menu>
			<Row>
				<Col xs={24} md={6}>
					{isLogined ? <UserProfile setIsLogined={setIsLogined}/> : <LoginForm setIsLogined={setIsLogined}/>}
				</Col>
				<Col xs={24} md={12}>
					{children}
				</Col>
				<Col xs={24} md={6}>
					오른쪽 메뉴
				</Col>
			</Row>
		</div>
	)
}

export default AppLayout
