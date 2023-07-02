import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"

export default function App({
     Component,
     pageProps: { session, ...pageProps },
   }: AppProps<{ session: Session }>) {
     return (
       <SessionProvider session={session}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
       </SessionProvider>
     )
}