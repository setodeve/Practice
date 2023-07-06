import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image'

export default function Head(){
  const { data: session, status } = useSession();
  const loading = status === "loading";
  return (
    <header>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {!session && (
          <>
            {loading ? (
              <>Loading ...</>
            ) : (
              <>
                <div className="ext-sm font-semibold leading-6">Not signed in</div> <br />
                <button 
                  onClick={() => signIn()}
                  className="ext-sm font-semibold leading-6"
                >Sign in</button>
              </>
            )}
          </>
        )}
        {session && (
          <>
            <div className="flex">
              <span className="m-1.5 ext-sm font-semibold leading-6">{session.user.name}</span>
              <Image
                src={session.user.image}
                alt="icon"
                width= {30}
                height= {30}
                className="h-8 w-auto"
              />
            </div>
            <button 
              onClick={() => signOut()} 
              className="ext-sm font-semibold leading-6"
            >Sign out</button>
          </>
        )}
      </nav>
    </header>
  );
}