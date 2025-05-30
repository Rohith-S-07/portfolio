import { NextResponse } from "next/server";

interface ContactRequestBody {
    name: string;
    email: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        await request.json() as ContactRequestBody;
        return NextResponse.json(
            { message: "Message sent succefully" },
            { status: 200 });
    } catch (error) {
        const errroMessage = error instanceof Error ? error.message : "Failed to send message";
        return NextResponse.json(
            { message: errroMessage },
            { status: 500 }
        )
    }
}