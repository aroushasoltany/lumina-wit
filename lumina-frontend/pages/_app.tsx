import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, AppShell } from '@mantine/core';
import { NavbarSimple } from '@/components/Navbar';
import { useRouter } from 'next/router';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const router = useRouter();

  const showNavbar = (router.pathname !== "/" && router.pathname !== "/signup" && router.pathname !== "/login");

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          colors: {
            brand: ['#F3F0FF', '#E5DBFF', '#D0BFFF', '#B197FC', '#9775FA', '#845EF7', '#7950F2', '#7048E8', '#6741D9', '#5F3DC4'],
          },
        primaryColor: 'brand', 
        }}
      >
      <AppShell>
        {showNavbar && <NavbarSimple />}
        <Component {...pageProps} />
      </AppShell>
      </MantineProvider>
    </>
  );
}
