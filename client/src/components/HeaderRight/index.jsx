import {useEffect} from 'react'
import user from '../../store/modules/user'
import {useDispatch, useSelector} from "react-redux";
import {LoginRegisterForm} from "../LoginRegisterForm";
import {ShareVideo} from "../ShareVideo";
import {Button, Row, Col} from "antd";

export const HeaderRight = () => {
    const isUserLoggedIn = useSelector(user.selectors.isUserLoggedIn())
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(user.actions.logout())
    }

    if (!isUserLoggedIn) {
        return <LoginRegisterForm/>
    }

    return (
        <Row>
            <Col>
                <ShareVideo/>
            </Col>
            <Col>
                <Button onClick={logout}>Logout</Button>
            </Col>
        </Row>
    )
}