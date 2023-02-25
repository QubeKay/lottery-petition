import { Button, Card, Checkbox, Col, Form, Input, Row } from "antd";
import { useState, useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";

function SignPetition({ t, i18n, submitButtonRef, onFinish, onFinishFailed }) {
  const [form] = Form.useForm();

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
              labelCol={{ span: 12 }}
              wrapperCol={{ span: 12 }}
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

              <Form.Item
                name="support_check"
                valuePropName="checked"
                initialValue={true}
                wrapperCol={{ offset: 4, span: 20 }}
              >
                <Checkbox>{t("support_check")}</Checkbox>
              </Form.Item>

              <Form.Item
                name="sign_check"
                valuePropName="checked"
                initialValue={false}
                wrapperCol={{ offset: 4, span: 20 }}
                rules={[
                  {
                    required: true,
                    validator: async (rules, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(
                            new Error(
                              t("error_msg_prefix", { LABEL: t("sign_check") })
                            )
                          ),
                    message: t("error_msg_prefix", { LABEL: t("sign_check") }),
                  },
                ]}
              >
                <Checkbox>{t("sign_check")}</Checkbox>
              </Form.Item>

              <Form.Item style={{ display: "none" }}>
                <Button
                  name="personal-info-submit"
                  ref={submitButtonRef}
                  type="primary"
                  htmlType="submit"
                >
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
