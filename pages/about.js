import Head from "next/head";
import styles from "../styles/About.module.css";
import { Button, Card, Col, Row, Typography } from "antd";
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
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card
            // hoverable
            style={{ height: "100%" }}
            actions={[
              <Button type="dashed" icon={<ShareAltOutlined />}>
                Share
              </Button>,
            ]}
            cover={
              <img
                alt="Photo of CS Ndirangu Gachunia"
                src="/images/gachunia.jpeg"
              />
            }
          >
            <Meta
              title={
                <span style={{ whiteSpace: "normal" }}>Ndirangu Gachunia</span>
              }
              description={
                <>
                  <Text>{t("position")}</Text>
                  <br />
                  <span>{t("bio")}</span>
                </>
              }
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Card style={{ height: "100%" }} bodyStyle={{ height: "100%" }}>
            <Meta
              style={{ height: "100%" }}
              title={
                <span style={{ whiteSpace: "normal" }}>
                  {t("video_heading")}
                </span>
              }
              description={
                <div style={{ minHeight: "340px" }}>
                  <iframe
                    src="https://www.facebook.com/plugins/video.php?height=321&href=https%3A%2F%2Fwww.facebook.com%2Fnyerimohoro%2Fvideos%2F690811256087604%2F&show_text=false&width=560&t=0"
                    width="100%"
                    height="321"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              }
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={20} xl={20}>
          <Card
            // hoverable
            style={{ height: "100%" }}
            actions={[
              <Button
                target="_blank"
                href="https://www.facebook.com/story.php?story_fbid=pfbid0LenuePNNPwX5NneuSR5vZT7b6AKrivNZgvqugUBZv5FECiw7e72QHL83qwCkzgRPl&id=1127471936&mibextid=Nif5oz"
                type="dashed"
                icon={<FacebookOutlined />}
              >
                {t("fb_post")}
              </Button>,
            ]}
          >
            <Meta
              title={
                <span style={{ whiteSpace: "normal" }}>
                  {t("commitment_heading")}
                </span>
              }
              description={<p>{t("commitment")}</p>}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["about", "common"])),
  },
});

export { Home };
export default withTranslation(["about", "common"])(Home);
