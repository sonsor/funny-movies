import {useEffect} from 'react'
import user from '../../store/modules/user'
import {useDispatch, useSelector} from "react-redux";
import {LoginRegisterForm} from "../LoginRegisterForm";
import {ShareVideo} from "../ShareVideo";
import {Button, Row, Col, Space} from "antd";
import Paragraph from "antd/es/skeleton/Paragraph";

export const HeaderRight = () => {
    const isUserLoggedIn = useSelector(user.selectors.isUserLoggedIn())
    const profile = useSelector(user.selectors.getProfile())
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(user.actions.logout())
    }

    if (!isUserLoggedIn) {
        return (
            <Col span={16}>
                <LoginRegisterForm/>
            </Col>
        )
    }

    return (
        <Col span={16}>
            <div className="text-justify-right">
                <Button type="link" className="top-bar-item">{profile.username}</Button>
                <ShareVideo/>
                <Button className="top-bar-item" onClick={logout}>Logout</Button>
            </div>
        </Col>
    )
}