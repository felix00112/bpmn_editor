// "use client"
//
// import React, { useEffect, useRef } from "react"
// import BpmnModeler from "bpmn-js/lib/Modeler"
//
// // CSS für Palette & Icons
// import "bpmn-js/dist/assets/diagram-js.css"
// import "bpmn-js/dist/assets/bpmn-js.css"
// import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css"
//
// export default function BpmnEditor() {
//     const containerRef = useRef<HTMLDivElement>(null)
//
//     useEffect(() => {
//         const modeler = new BpmnModeler({
//             container: containerRef.current!,
//         })
//
//         modeler.createDiagram()
//     }, [])
//
//     return (
//         <div
//             ref={containerRef}
//             style={{
//                 width: "100%",
//                 height: "600px",
//                 border: "1px solid #ccc",
//                 background: "#b60d0d",
//             }}
//         />
//
//     )
// }

// "use client"
//
// import { Layout, Typography } from "antd"
// import BpmnEditor from "@/components/BpmnEditor"
//
// const { Header, Content } = Layout
//
// export default function Page() {
//     return (
//         <Layout style={{ minHeight: "100vh" }}>
//             <Header>
//                 <Typography.Title level={3} style={{ color: "#fff", margin: 0 }}>
//                     BPMN Editor
//                 </Typography.Title>
//             </Header>
//             <Content style={{ padding: "24px" }}>
//                 <BpmnEditor />
//             </Content>
//         </Layout>
//     )
// }

import ClientWrapper from "./components/ClientWrapper"
import BpmnEditor from "./components/BpmnEditor"
import { Layout, Typography } from "antd"

export default function Page() {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Layout.Header>
                <Typography.Title level={3} style={{ color: "#fff", margin: 0 }}>
                    BPMN Editor
                </Typography.Title>
            </Layout.Header>
            <Layout.Content style={{ padding: "24px" }}>
                <BpmnEditor />
            </Layout.Content>
        </Layout>
    )
}

