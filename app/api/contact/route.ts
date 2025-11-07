import { NextResponse } from "next/server";
import { z } from "zod";

const ContactSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = ContactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  console.info("Contact submission", parsed.data);

  return NextResponse.json({ ok: true });
}
