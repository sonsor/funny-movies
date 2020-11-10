import {Layout, Row, Col, Divider, Typography, Space} from 'antd';
import {HeaderRight} from "../components/HeaderRight";
import {HomeFilled} from "@ant-design/icons";

const {Header, Footer, Content} = Layout;
const {Title} = Typography

export const Main = ({children}) => {

    return (
        <Layout className="layout">
            <Header>
                <Row>
                    <Col span={8}>
                        <div className="logo">
                            <Title level={3}>
                                <HomeFilled/>
                                <Space>FunnyMovies</Space>
                            </Title>
                        </div>
                    </Col>

                    <HeaderRight/>
                </Row>
            </Header>
            <Divider/>
            <Content style={{padding: '0 50px'}}>
                <div className="site-layout-content">
                    {children}
                </div>
            </Content>
            <Footer/>
        </Layout>
    )
}