import { Button, Card, Col, Form, Input, Row } from "antd";
import { useState, useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";

function SignPetition({ t, i18n }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  useEffect(() => {
    // language changed
    if (currentLanguage !== i18n.language) {
      setCurrentLanguage(i18n.language);

      [
        "fname",
        "sname",
        "lname",
        "email",
        "phone",
        "id_number",
        "county",
      ].forEach((name) => form.setFields([{ name: name, errors: "" }]));
    }
  });

  return (
    <>
      <Row justify="center" align="stretch" gutter={[8, 16]}>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 24, offset: 0 }}
          md={{ span: 24, offset: 0 }}
          lg={{ span: 24, offset: 0 }}
          xl={{ span: 24, offset: 0 }}
        >
          <Card
            title={
              <>
                <UserOutlined /> &nbsp;
                <span style={{ whiteSpace: "normal" }}>{t("modal_title")}</span>
              </>
            }
            bordered={false}
          >
            <Form
              name="petition"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              form={form}
            >
              <Form.Item
                label={t("fname")}
                name="fname"
                rules={[
                  {
                    required: true,
                    message: t("error_msg_prefix", { LABEL: t("fname") }),
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label={t("sname")}
                name="sname"
                rules={[
                  {
                    required: true,
                    message: t("error_msg_prefix", { LABEL: t("sname") }),
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label={t("lname")}
                name="lname"
                rules={[
                  {
                    required: true,
                    message: t("error_msg_prefix", { LABEL: t("lname") }),
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
                label={t("id_number")}
                name="id_number"
                rules={[
                  {
                    required: true,
                    message: t("error_msg_prefix", {
                      LABEL: t("id_number"),
                    }),
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label={t("county")}
                name="county"
                rules={[
                  {
                    required: true,
                    message: t("error_msg_prefix", { LABEL: t("county") }),
                  },
                ]}
              >
                <Input />
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

export default SignPetition;
