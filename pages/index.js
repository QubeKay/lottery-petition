import { useState, useRef } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SignPetition from "../components/sign-petition";
import { TeamOutlined } from "@ant-design/icons";
import { Button, Card, Col, Modal, Row } from "antd";
const { Meta } = Card;

function Home({ t, i18n }) {
  const [showModal, setShowModal] = useState(false);
  const submitButtonRef = useRef();

  return (
    <>
      <Head>
        <title>{t("title")}</title>
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
                  {t("petition_heading")}
                </span>
              }
              description={
                <>
                  <p>{t("petition")}</p>
                  <ul>
                    <li>{t("petition_1")}</li>
                    <li>{t("petition_2")}</li>
                  </ul>
                </>
              }
            />
          </Card>
        </Col>
      </Row>
      <br />
      <div className={styles.container}>
        <Button
          data-testid="sign-petition-button"
          size="large"
          type="primary"
          shape="round"
          onClick={() => setShowModal(true)}
        >
          {t("sign_btn_text")} &nbsp; &gt;
        </Button>
      </div>

      <Modal
        open={showModal}
        onOk={() => {
          submitButtonRef.current.dispatchEvent(new MouseEvent("click"));
        }}
        onCancel={() => setShowModal(false)}
        type="warning"
        cancelText={t("dismiss_modal_btn")}
        okText={t("sign_btn_text")}
      >
        <SignPetition
          {...{ t, i18n }}
          submitButtonRef={submitButtonRef}
        ></SignPetition>
      </Modal>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["index", "common"])),
  },
});

export { Home };
export default withTranslation(["index", "common"])(Home);
