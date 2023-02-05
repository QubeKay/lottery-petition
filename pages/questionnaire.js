import { useEffect, useState } from "react";
import Head from "next/head";
// import styles from "../styles/Contacts.module.css";

import { Button, Card, Col, Form, Input, Radio, Row } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Home({ t, i18n }) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [form] = Form.useForm();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  useEffect(() => {
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
                  options={ yesNoOptions}
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
                  options={ yesNoOptions}
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
                <Button type="primary" htmlType="submit">
                  {t("submit")}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["questionnaire", "common"])),
  },
});

export { Home };
export default withTranslation(["questionnaire", "common"])(Home);
