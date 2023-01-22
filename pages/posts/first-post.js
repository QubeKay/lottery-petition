import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function FirstPost() {
  const { t } = useTranslation('common');

  return (
    <>
    <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <h1>First Post {t('button_text')}</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image
        src="/images/profile.png" // Route of the image file
        height={333} // Desired size with correct aspect ratio
        width={604} // Desired size with correct aspect ratio
        alt="Gachunia Profile Pic"
        />
    </>
  );
}

export const getStaticProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
    ])),
  },
})