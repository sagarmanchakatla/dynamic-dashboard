import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    // Parse the request body
    const { email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // Check if the user exists and the password is correct
    if (user && bcrypt.compareSync(password, user.password)) {
      // Generate a JWT token
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
        expiresIn: "1h",
      });

      // Return the token
      return NextResponse.json({ token, email: user.email });
    } else {
      // Return an error if credentials are invalid
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json({ error: "Error logging in" }, { status: 500 });
  }
}
