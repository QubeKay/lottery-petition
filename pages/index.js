import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TeamOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
const { Meta } = Card;

function Home({ t, i18n }) {
  return (
    <>
      <Head>
        <title>Lottery Petition - Ndirangu Gachunia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 24, offset: 0 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 18, offset: 3 }}
          xl={{ span: 16, offset: 4 }}
        >
          <Card bordered={false}>
            <Meta
              avatar={<TeamOutlined />}
              title={
                <span style={{ whiteSpace: "normal" }}>
                  A public petition to regulate gambling and other lottery
                  schemes on public access radio & TV stations
                </span>
              }
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed laoreet augue, et tempor arcu. Curabitur sodales accumsan gravida. Curabitur lacus sapien, rutrum id semper id, interdum lobortis mauris. Curabitur elementum cursus mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut commodo rutrum metus, id condimentum sapien interdum quis. Donec rutrum, velit eget iaculis aliquam, nisl dolor imperdiet purus, a aliquet tellus ante eget metus. Maecenas vel fermentum enim, quis fermentum ex.
Ut ac maximus arcu, in aliquet elit. In eros sapien, sodales sed sem nec, consectetur vulputate tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis dignissim nulla, a convallis eros interdum et. Donec quis enim laoreet, varius sem at, maximus eros. Maecenas eu auctor felis. Aenean libero nisi, congue ac justo ut, tristique efficitur risus. Pellentesque suscipit eros sed iaculis varius.
Etiam condimentum eu felis eget pulvinar. Nam rhoncus nibh ac faucibus dignissim. Etiam suscipit sed justo vitae molestie. Nunc ut metus non elit tincidunt dapibus non id ligula. Ut pulvinar sapien non est ultrices dignissim. Ut non dapibus mauris. Quisque dictum elit sed hendrerit fringilla. Cras posuere, felis sit amet tempor dignissim, tellus sem rutrum dui, ac tempus ipsum risus quis ligula. Suspendisse lobortis neque sit amet sapien vestibulum pharetra. Proin suscipit hendrerit augue id varius. Sed vel scelerisque risus, vitae consequat nisl."
            />
          </Card>
        </Col>
      </Row>
      <br />
      <div className={styles.container}>
        <Button size="large" type="primary" shape="round">
          Sign Petition &nbsp; &gt;
        </Button>
      </div>
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
