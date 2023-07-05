import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image'

export default function Head(){
  const { data: session, status } = useSession();
  const loading = status === "loading";
  return (
    <header>
      {!session && (
        <>
          {loading ? (
            <>Loading ...</>
          ) : (
            <>
              Not signed in <br />
              <button onClick={() => signIn()}>Sign in</button>
            </>
          )}
        </>
      )}
      {session && (
        <>
          {session.user.name} <br />
          <Image
            src={session.user.image}
            alt="icon"
            width= {80}
            height= {80}
          />
          <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </header>
  );
}