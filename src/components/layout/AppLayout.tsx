import Head from 'next/head';
import { PropsWithChildren } from 'react';

import { APP_NAME } from '../../consts/app';
import { Footer } from '../nav/Footer';
import { Header } from '../nav/Header';

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        {/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{APP_NAME}</title>
      </Head>
      <div
        style={styles.container}
        id="app-content"
        className="relative flex flex-col justify-between h-full min-h-screen w-full min-w-screen"
      >
        <div className="hidden md:flex absolute left-[-18%] top-[-10%]" style={styles.planet}></div>
        <div
          className="hidden md:flex absolute right-[-28%] bottom-[-30%]"
          style={styles.planet}
        ></div>
        <Header />
        <div className="sm:px-4 mx-auto grow flex items-center max-w-screen-xl">
          <main className="w-full flex-1 my-4 flex items-center justify-center">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}

const styles = {
  container: {
    overflow: 'hidden',
  },
  planet: {
    width: `80%`,
    height: `85vh`,
    borderRadius: `1373.014px`,
    background: `radial-gradient(50% 50% at 50% 50%, #C6DFFC 0%, rgba(217, 230, 255, 0.00) 100%)`,
  },
};
