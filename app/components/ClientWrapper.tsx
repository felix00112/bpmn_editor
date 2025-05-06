"use client"

import { ConfigProvider } from "antd"

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    return <ConfigProvider>{children}</ConfigProvider>
}
