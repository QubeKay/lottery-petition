import Head from "next/head";
import { Button, Card, Col, Empty, Row, Typography } from "antd";
import { ShareAltOutlined, FacebookOutlined } from "@ant-design/icons";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const { Meta } = Card;
const { Text } = Typography;

function Home({ t, i18n }) {
  return (
    <div>
      <Head>
        <title>{t("title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row justify="center" align="stretch" gutter={[8, 16]}>
        <Col xs={24} sm={24} md={11} lg={10} xl={10}>
          <Card>
            <Meta
              title={
                <span style={{ whiteSpace: "normal" }}>{t("sponsors")}</span>
              }
              description={<Empty></Empty>}
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={11} lg={10} xl={10}>
          <Card>
            <Meta
              title={
                <span style={{ whiteSpace: "normal" }}>{t("supporters")}</span>
              }
              description={<Empty></Empty>}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["supporters", "common"])),
  },
});

export { Home };
export default withTranslation(["supporters", "common"])(Home);
