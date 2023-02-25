import { useEffect, useState } from "react";
import Head from "next/head";
// import styles from "../styles/Contacts.module.css";

import {
  Button,
  Card,
  Col,
  Form,
  Input,
  message,
  Radio,
  Result,
  Row,
} from "antd";
import { ArrowRightOutlined, QuestionCircleOutlined } from "@ant-design/icons";

import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";

function Home({ t, i18n, db }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (data) => {
    data =
      router.query.signature_id == null
        ? data
        : { ...data, signature_id: router.query.signature_id };

    data = { ...data, created: serverTimestamp() };
    console.log("Success:", data);
    setIsSubmitting(true);

    const signatureRef = collection(db, "questionnaires");
    addDoc(signatureRef, data)
      .then((successData) => {
        console.log({ successData });
        setIsSubmitting(false);
        setWasSubmitted(true);

        router.push("questionnaire", undefined, { shallow: true });
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.log({ error });
        messageApi.open({
          type: "error",
          content: "Failed to send message. Please try again.",
          style: {
            marginTop: "30vh",
          },
        });
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [form] = Form.useForm();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  useEffect(() => {
    console.log(router.query);

    // language changed
    if (currentLanguage !== i18n.language) {
      setCurrentLanguage(i18n.language);

      ["is_gambler", "false_ads", "won_lottery", "story"].forEach((name) =>
        form.setFields([{ name: name, errors: "" }])
      );
    }
  });

  const yesNoOptions = [
    { label: t("yes"), value: "yes" },
    { label: t("no"), value: "no" },
  ];

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {router.query.signatureSaved && (
        <Result
          status="success"
          title={t("result_title")}
          subTitle={t("result_subtitle")}
        />
      )}
      <Row align="stretch">
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 24, offset: 0 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 18, offset: 3 }}
          xl={{ span: 16, offset: 4 }}
        >
          <Card
            title={
              <>
                <QuestionCircleOutlined /> &nbsp;
                <span style={{ whiteSpace: "normal" }}>{t("heading")}</span>
              </>
            }
            bordered={false}
          >
            {contextHolder}
            {wasSubmitted ? (
              <Result
                status="success"
                title={t("qresult_title")}
                subTitle={t("qresult_subtitle")}
                extra={[
                  <Button key="back" onClick={() => router.push("/")}>
                    Petition <ArrowRightOutlined />
                  </Button>,
                ]}
              />
            ) : (
              <Form
                name="questionnaire"
                labelWrap
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 12 }}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                form={form}
              >
                <Form.Item
                  label={t("is_gambler")}
                  name="is_gambler"
                  rules={[
                    {
                      required: true,
                      message: t("error_msg_prefix", {
                        LABEL: t("is_gambler"),
                        TYPE: t("select"),
                      }),
                    },
                  ]}
                >
                  <Radio.Group
                    options={yesNoOptions}
                    // onChange={onChange4}
                    // value={value4}
                    optionType="button"
                    buttonStyle="solid"
                  />
                </Form.Item>

                <Form.Item
                  label={t("false_ads")}
                  name="false_ads"
                  rules={[
                    {
                      required: true,
                      message: t("error_msg_prefix", {
                        LABEL: t("false_ads"),
                        TYPE: t("select"),
                      }),
                    },
                  ]}
                >
                  <Radio.Group
                    options={yesNoOptions}
                    // onChange={onChange4}
                    // value={value4}
                    optionType="button"
                    buttonStyle="solid"
                  />
                </Form.Item>

                <Form.Item
                  label={t("won_lottery")}
                  name="won_lottery"
                  rules={[
                    {
                      required: true,
                      message: t("error_msg_prefix", {
                        LABEL: t("won_lottery"),
                        TYPE: t("select"),
                      }),
                    },
                  ]}
                >
                  <Radio.Group
                    options={yesNoOptions}
                    // onChange={onChange4}
                    // value={value4}
                    optionType="button"
                    buttonStyle="solid"
                  />
                </Form.Item>

                <Form.Item
                  label={t("story")}
                  name="story"
                  rules={[
                    {
                      required: true,
                      message: t("error_msg_prefix", {
                        LABEL: t("story"),
                        TYPE: t("enter"),
                      }),
                    },
                  ]}
                >
                  <Input.TextArea placeholder={t("txt_area_hint")} rows={6} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={isSubmitting}
                  >
                    {t("submit")}
                  </Button>
                </Form.Item>
              </Form>
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "questionnaire",
      "common",
    ])),
  },
});

export { Home };
export default withTranslation(["questionnaire", "common"])(Home);
