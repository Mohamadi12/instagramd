import PostsGrid from "@/app/components/PostsGrid";
import { CheckIcon, ChevronLeft, CogIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  return (
    <main>
      <section className="flex justify-between items-center">
        <button>
          <ChevronLeft />
        </button>
        <div className="font-bold flex items-center gap-2">
          My_name_Nana
          <div className="size-5 rounded-full bg-ig-red inline-flex justify-center items-center text-white">
            <CheckIcon size={16} />
          </div>
        </div>
        <button>
          <CogIcon />
        </button>
      </section>
      <section className="mt-8 flex justify-center">
        <div className="size-48 p-2 rounded-full bg-gradient-to-tr from-ig-orange to-ig-red">
          <div className="size-44 bg-white p-2 rounded-full">
            <div className="size-40 aspect-square overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mt-4">
        <h1 className="text-xl font-bold">Nana</h1>
        <p className="text-gray-500 mt-1 mb-1">Business account</p>
        <p>
          Entrepreneur, Husband, Father <br />
          contact: dalizeta368@gmail.com
        </p>
      </section>
      <section className="mt-4">
        <div className="flex justify-center gap-4 font-bold">
          <Link href={"/"}>Posts</Link>
          <Link href={"/highlights"} className="text-gray-400">Highlights</Link>
        </div>
      </section>
      <section className="mt-4">
        <PostsGrid/>
      </section>
    </main>
  );
};

export default ProfilePage;
