"use client"

import { Layout, Typography } from "antd"
import ClientWrapper from "./components/ClientWrapper"
import BpmnEditor from "./components/BpmnEditor"

const { Header, Content } = Layout

export default function Page() {
    return (
        <ClientWrapper>
            <Layout style={{ minHeight: "100vh" }}>
                <Header>
                    <Typography.Title level={3} style={{ color: "#fff", margin: 0 }}>
                        BPMN Editor
                    </Typography.Title>
                </Header>
                <Content style={{ padding: "24px" }}>
                    <BpmnEditor />
                </Content>
            </Layout>
        </ClientWrapper>
    )
}
