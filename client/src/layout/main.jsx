import {Layout, Row, Col, Divider} from 'antd';
import {Logo} from "../components/Logo";
import {LoginRegisterForm} from "../components/LoginRegisterForm";
import {ShareVideo} from "../components/ShareVideo";
import {HeaderRight} from "../components/HeaderRight";
const { Header, Footer, Content } = Layout;

export const Main = ({ children }) => {

    return (
        <Layout>
            <Header>
                <Row align="middle">
                    <Col>
                        <Logo/>
                    </Col>
                    <Col offset={12}>
                        <HeaderRight/>
                    </Col>
                </Row>
            </Header>
            <Content>
                <Divider/>
                <Row gutter={6}>
                    <Col push={4}>
                        {children}
                    </Col>
                </Row>
            </Content>
            <Footer />
        </Layout>
    )
}