import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const { xml } = await req.json()

        if (!xml || typeof xml !== "string") {
            return NextResponse.json({ message: "Invalid XML" }, { status: 400 })
        }

        const dir = join(process.cwd(), "diagrams")
        await mkdir(dir, { recursive: true })

        const timestamp = new Date().toISOString().replace(/[:.]/g, "-")
        const filePath = join(dir, `diagram_${timestamp}.bpmn`)

        await writeFile(filePath, xml, "utf-8")

        return NextResponse.json({ message: "Diagramm gespeichert", path: filePath })
    } catch (err: any) {
        console.error("Fehler beim Speichern:", err)
        return NextResponse.json({ message: "Fehler beim Speichern" }, { status: 500 })
    }
}
