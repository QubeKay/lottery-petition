import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Link from "next/link";

import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Home({ t, i18n }) {

  return (
    <>
      <Head>
        <title>Sign :: Lottery Petition</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export { Home };
export default withTranslation()(Home);
