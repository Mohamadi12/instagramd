"use client";
import { updateProfile } from "@/actions";
import { Profile } from "@prisma/client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { CloudUploadIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const SettingsForm = ({
  userEmail,
  profile,
}: {
  userEmail: string;
  profile: Profile;
}) => {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [avatarUrl, setAvatarUrl] = useState(profile.avatar);

  useEffect(() => {
    if (file) {
      const data = new FormData();
      data.set("file", file);
      fetch("api/upload", {
        method: "POST",
        body: data,
      }).then((response) => {
        response.json().then((url) => {
          setAvatarUrl(url);
        });
      });
    }
  }, [file]);

  return (
    <>
      <form
        action={async (data: FormData) => {
          await updateProfile(data, userEmail);
          router.push("/profile");
          router.refresh();
        }}
      >
        <input type="hidden" name="avatar" value={avatarUrl || ""} />
        <div className="flex gap-4 items-center">
          <div>
            <div className="bg-gray-400 size-24 overflow-hidden shadow-md shadow-gray-400 rounded-full aspect-square">
              <img src={avatarUrl || ""} alt="" />
            </div>
          </div>
          <div>
            <input
              type="file"
              ref={fileRef}
              className="hidden"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
            <Button
              type="button"
              variant="surface"
              onClick={() => fileRef.current?.click()}
            >
              <CloudUploadIcon />
              Change avatar
            </Button>
          </div>
        </div>
        <p className="mt-2 font-bold">username </p>
        <TextField.Root
          name="username"
          defaultValue={profile.username || ""}
          placeholder="Your_username"
        />
        <p className="mt-2 font-bold"> name </p>
        <TextField.Root
          name="name"
          defaultValue={profile.name || ""}
          placeholder="Nana Mohamadi"
        />
        <p className="mt-2 font-bold">subtitle </p>
        <TextField.Root
          name="subtitle"
          defaultValue={profile.subtitle || ""}
          placeholder="Graphic designer"
        />
        <p className="mt-2 font-bold">bio </p>
        <TextArea name="bio" defaultValue={profile.bio || ""} />
        <div className="mt-4 flex justify-center">
          <Button variant="solid">Save settings</Button>
        </div>
      </form>
    </>
  );
};

export default SettingsForm;
