import { NextResponse } from "next/server";
import {
  getUsers,
  createUser,
} from "@/src/modules/users/services/user.service";

export async function GET() {
  const users = await getUsers();
  return NextResponse.json({ users });
}

export async function POST(req: Request) {
  try {
    const { name, email, password, confirmPassword } = await req.json();

    const user = await createUser({ name, email, password, confirmPassword });

    if ("error" in user) {
      NextResponse.json({ error: "Error creating user." }, { status: 500 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating user." },
      { status: 500 }
    );
  }
}
