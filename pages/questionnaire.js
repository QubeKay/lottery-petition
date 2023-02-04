import { useEffect, useState } from "react";
import Head from "next/head";
// import styles from "../styles/Contacts.module.css";

import { Button, Card, Col, Form, Input, Row } from "antd";
import { CommentOutlined } from "@ant-design/icons";

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

      ["name", "email", "phone", "message"].forEach((name) =>
        form.setFields([{ name: name, errors: "" }])
      );
    }
  });

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row justify="center" align="stretch" gutter={[8, 16]}>
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
                <CommentOutlined /> &nbsp;
                <span style={{ whiteSpace: "normal" }}>{t("contact_us")}</span>
              </>
            }
            bordered={false}
          >
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              form={form}
            >
              <Form.Item
                label={t("full_name")}
                name="name"
                rules={[
                  {
                    required: true,
                    message: t("error_msg_prefix", { LABEL: t("full_name") }),
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label={t("email")}
                name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: t("error_msg_prefix", { LABEL: t("email") }),
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label={t("phone_number")}
                name="phone"
                rules={[
                  {
                    required: true,
                    message: t("error_msg_prefix", {
                      LABEL: t("phone_number"),
                    }),
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label={t("message")}
                name="message"
                rules={[
                  {
                    required: true,
                    message: t("error_msg_prefix", { LABEL: t("message") }),
                  },
                ]}
              >
                <Input.TextArea rows={6} />
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
    ...(await serverSideTranslations(locale ?? "en", ["contacts", "common"])),
  },
});

export { Home };
export default withTranslation(["contacts", "common"])(Home);
