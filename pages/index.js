import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SignPetition from "../components/sign-petition";
import SignatureCanvas from "react-signature-canvas";
import { TeamOutlined, ReloadOutlined } from "@ant-design/icons";
import { Alert, Button, Card, Col, Modal, Row, Space } from "antd";
import { useRouter } from "next/router";
const { Meta } = Card;

function Home({ t, i18n }) {
  // Personal Info Modal
  const [showModal, setShowModal] = useState(false);
  const submitButtonRef = useRef();
  const router = useRouter();

  const onFinish = (values) => {
    setTimeout(() => setShowModal(false), 2000);
    console.log("Success:", values);
    router.push("questionnaire");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // Signature Canvas
  const sigCanvas = useRef();
  const sigCardRef = useRef();
  const [showBlankSigCanvasError, setShowBlankSigCanvasError] = useState(false);
  const SIG_CANVAS_THRESHOLD_WIDTH = 1;
  const [sigCanvasWidth, setSigCanvasWidth] = useState(
    SIG_CANVAS_THRESHOLD_WIDTH
  );
  const [sigCanvasHeight, setSigCanvasHeight] = useState(
    SIG_CANVAS_THRESHOLD_WIDTH
  );
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count > 0) {
      setSigCanvasWidth(sigCardRef.current.clientWidth - 48);
      setSigCanvasHeight(sigCardRef.current.clientHeight - 48);
      setCount(count - 1);
    }
  });

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
            <div className={styles.container}>
              <Card
                ref={sigCardRef}
                title={t("sign_pad_title")}
                style={{
                  textAlign: "center",
                  width: "100%",
                  minHeight: "400px",
                }}
              >
                <Space direction="vertical">
                  {sigCanvasWidth > SIG_CANVAS_THRESHOLD_WIDTH && (
                    <SignatureCanvas
                      ref={sigCanvas}
                      penColor="blue"
                      backgroundColor="rgba(240, 240, 240, 20)"
                      // width={sigCanvasWidth}
                      // height={sigCanvasHeight}
                      canvasProps={{
                        width: sigCanvasWidth,
                        height: sigCanvasHeight,
                        // className: "sigCanvas",
                      }}
                    />
                  )}

                  {showBlankSigCanvasError && (
                    <Alert
                      message="Please sign first. Signature cannot be blank!"
                      type="error"
                      closable={true}
                      afterClose={() => setShowBlankSigCanvasError(false)}
                    />
                  )}

                  <Space
                    direction="horizontal"
                    wrap
                    style={{ justifyContent: "center" }}
                  >
                    <Button
                      onClick={() => sigCanvas.current.clear()}
                      type="dashed"
                      icon={<ReloadOutlined />}
                    >
                      {t("sign_pad_clear")}
                    </Button>

                    <Button
                      data-testid="sign-petition-button"
                      size="large"
                      type="primary"
                      shape="round"
                      onClick={() => {
                        const base64Png = sigCanvas.current
                          .getTrimmedCanvas()
                          .toDataURL("image/png");

                        console.log(base64Png);
                        if (!sigCanvas.current.isEmpty()) {
                          setShowBlankSigCanvasError(false);
                          setShowModal(true);
                        } else setShowBlankSigCanvasError(true);
                      }}
                    >
                      {t("sign_btn_text")} &nbsp; &gt;
                    </Button>
                  </Space>
                </Space>
              </Card>
            </div>
          </Card>
        </Col>
      </Row>

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
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
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
