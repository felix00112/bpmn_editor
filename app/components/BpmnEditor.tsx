"use client"

import BpmnModeler from "bpmn-js/lib/Modeler"
import React, {useEffect, useRef, useState} from "react"
import { Button, message, Card } from "antd"
import "bpmn-js/dist/assets/diagram-js.css"
import "bpmn-js/dist/assets/bpmn-js.css"
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css"

export default function BpmnEditor() {
    const containerRef = useRef<HTMLDivElement>(null)
    const modelerRef = useRef<BpmnModeler | null>(null)

    const [messageApi, contextHolder] = message.useMessage()

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (containerRef.current) {
            modelerRef.current = new BpmnModeler({
                container: containerRef.current,
            })
            modelerRef.current.createDiagram()
        }
    }, [])

    const saveDiagram = async () => {
        if (!modelerRef.current) return

        setLoading(true)

        try {
            const { xml } = await modelerRef.current.saveXML({ format: true })

            const response = await fetch("/api/save", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ xml }),
            })

            const result = await response.json()

            setLoading(false)

            if (!response.ok) {
                messageApi.open({
                    type: "error",
                    content: result.message || "Fehler beim Speichern",
                })
                return
            }

            messageApi.open({
                type: "success",
                content: result.message || "Diagramm erfolgreich gespeichert!",
            })
        } catch (err: any) {
            messageApi.open({
                type: "error",
                content: err.message || "Unbekannter Fehler beim Speichern",
            })
        }
    }

    return (
        <Card
            title="BPMN Editor"
            variant={"borderless"}
            style={{ width: "100%", marginTop: 16 }}
        >
            {contextHolder}
            <Button
                type="primary"
                onClick={saveDiagram}
                loading={loading}
                style={{ marginBottom: "16px" }}
            >
                Speichern
            </Button>
            <div
                ref={containerRef}
                style={{
                    width: "100%",
                    height: "500px",
                    border: "1px solid #ccc",
                    background: "#fff",
                }}
            />
        </Card>
    )
}
