import { NextResponse } from "next/server";
import {
  getUserService,
  createUserService,
} from "@/src/modules/users/services/user.service";

export async function GET() {
  const users = await getUserService();
  return NextResponse.json({ users });
}

export async function POST(req: Request) {
  try {
    const { email, password, confirmPassword } = await req.json();
    
    const user = await createUserService(email, password, confirmPassword);
  
    if(user === undefined){
      NextResponse.json(
        { error: "Error creating user." },
        { status: 500 }
      );
    }
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating user." },
      { status: 500 }
    );
  }
}
