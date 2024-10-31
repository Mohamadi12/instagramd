"use client";
import { postEntry } from "@/actions";
import { Button, TextArea } from "@radix-ui/themes";
import { SendIcon, UploadCloudIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const CreatePage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const fileInRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (file) {
      const data = new FormData();
      data.set("file", file);
      fetch("api/upload", {
        method: "POST",
        body: data,
      }).then((response) => {
        response.json().then((url) => {
          setImageUrl(url);
        });
      });
    }
  }, [file]);

  return (
    <form
      action={async (data) => {
        const id = await postEntry(data);
        router.push(`/post/${id}`);
        router.refresh();
      }}
    >
      <input type="hidden" name="image" value={imageUrl} />
      <div className="flex flex-col gap-4">
        <div>
          <div className="w-64 p-2 min-h-64 bg-gray-400 rounded-md relative">
            {imageUrl && <img src={imageUrl} alt="" className="rounded-md" />}
            <div className="absolute inset-0 flex items-center justify-center">
              <input
                type="file"
                ref={fileInRef}
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="hidden"
              />
              <Button
                type="button"
                variant="surface"
                onClick={() => fileInRef?.current?.click()}
              >
                <UploadCloudIcon size={16} />
                Choose image
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <TextArea
            name="description"
            className="h-16"
            placeholder="Add photo description..."
          />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Button>
          <SendIcon size={16} />
          Publish
        </Button>
      </div>
    </form>
  );
};

export default CreatePage;
