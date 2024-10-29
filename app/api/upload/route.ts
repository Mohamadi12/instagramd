import { NextResponse, NextRequest } from "next/server";
import { pinata } from "@/config";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;
    const uploadData = await pinata.upload.file(file, {
      groupId: '0192da11-5bf2-7b21-bb21-0d5ef16c7386'
    });
    const fileUrl = `https://${process.env.NEXT_PUBLIC_GATWAY_URL}/files/${uploadData.cid}`
    return NextResponse.json(fileUrl, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
