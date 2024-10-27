import { auth, signIn, signOut } from "@/auth";

const Home = async () => {
  const session = await auth();
  return (
    <div className="">
      Home <br />
      {session && (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            className="border px-4 py-2 bg-ig-red rounded-lg"
            type="submit"
          >
            Logout
          </button>
        </form>
      )}
      {!session && (
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button
            className="border px-4 py-2 bg-ig-red rounded-lg"
            type="submit"
          >
            Login with Google
          </button>
        </form>
      )}
    </div>
  );
};

export default Home;
