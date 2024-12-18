import { PLANETS } from "@/shared/config/planets";

export async function GET() {
  return new Response(JSON.stringify(PLANETS));
}
