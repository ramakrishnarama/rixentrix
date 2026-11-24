import { NextResponse } from "next/server";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const message = String(body?.message ?? "").trim();

  if (!name || !emailRe.test(email) || !message) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  // TODO: deliver the enquiry (email provider, CRM or database).
  console.log("Contact enquiry:", { name, email, service: body?.service, message });

  return NextResponse.json({ ok: true });
}
