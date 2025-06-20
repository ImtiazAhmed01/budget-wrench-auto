import { NextResponse } from "next/server"

export const middleware = async (req) => {
    return NextResponse.next()
}