import {
  getListsByUserId,
  GetListsByUserIdProps,
} from "@/src/modules/lists/services/list.service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const authToken = req.headers.get("Authorization")?.split(" ")[1];

    if (!authToken) {
      return NextResponse.json(
        { error: "Authorization token is missing" },
        { status: 401 }
      );
    }

    const { userId }: GetListsByUserIdProps = await req.json();

    if (!userId) {
      return NextResponse.json(
        { error: "Missing required field: userId" },
        { status: 400 }
      );
    }

    const lists = await getListsByUserId({ userId, authToken });

    return NextResponse.json({ lists });
  } catch (error: any) {
    if (error.message === "Invalid token") {
      return NextResponse.json(
        { error: "Invalid token" },
        { status: 403 }
      );
    }

    if (error.message === "Token expired") {
      return NextResponse.json(
        { error: "Token has expired, please log in again" },
        { status: 401 }
      );
    }

    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
