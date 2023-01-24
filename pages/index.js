import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import { useRouter } from "next/router";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Home({ t, i18n }) {
  const router = useRouter();
  const changeTo = router.locale === "en" ? "sw" : "en";

  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Lottery Petition - Ndirangu Gachunia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Create your pages e.g.: <Link href="/posts/first-post">this page!</Link>
        </h1>

      </main>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export { Home };
export default withTranslation()(Home);
