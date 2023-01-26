import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config.js";
import React, { useState } from "react";
import "../styles/globals.css";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { wrapper } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { todosLoading, fetchTodos } from "../store/layout/layoutSlice";

import {
  TeamOutlined,
  AimOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  TranslationOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Row, Col, theme } from "antd";

const { Header, Content, Sider, Footer } = Layout;

const App = ({ Component, ...rest }) => {
  const { props } = wrapper.useWrappedStore(rest);
  const { layout } = useSelector((state) => state);
  const dispatch = useDispatch();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { t } = useTranslation("common");
  const [current, setCurrent] = useState("1");
  const [collapsed, setCollapsed] = useState(true);

  const router = useRouter();

  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const items1 = [
    {
      key: "1",
      icon: <AimOutlined />,
      label: "Petition",
    },
    {
      key: "2",
      icon: <InfoCircleOutlined />,
      label: t("button_text"),
    },
    {
      key: "3",
      icon: <TeamOutlined />,
      label: "Sponsors & Supporters",
    },
    {
      key: "4",
      icon: <PhoneOutlined />,
      label: "Contacts" + " + " + layout.status,
    },
    {
      key: "5",
      icon: <TranslationOutlined />,
      label: "Translation",
      children: [
        {
          label: "English",
          key: "lang:en",
        },
        {
          label: "Swahili",
          key: "lang:sw",
        },
      ],
    },
  ];

  const onMenuClicked = (e) => {
    // console.log('click ', e);
    switch (e.key) {
      case "lang:en":
        onToggleLanguageClick("en");
        break;
      case "lang:sw":
        onToggleLanguageClick("sw");
        break;
      default:
        setCurrent(e.key);
        dispatch(fetchTodos());
        break;
    }
  };

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          padding: 0,
          paddingRight: 24,
          background: colorBgContainer,
        }}
      >
        <p className="logo">Lottery Petition</p>
        <Row style={{ minHeight: "100%" }}>
          <Col xs={0} sm={0} md={0} lg={24} xl={24}>
            <Menu
              onClick={onMenuClicked}
              style={{ justifyContent: "flex-end" }}
              mode="horizontal"
              selectedKeys={[current]}
              items={items1}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={0} xl={0}>
            <Button
              type="secondary"
              onClick={() => setCollapsed(!collapsed)}
              className="trigger"
            >
              {collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            </Button>
          </Col>
        </Row>
      </Header>
      <Layout className="site-layout">
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Component {...props.pageProps} />
        </Content>
        <Sider
          trigger={null}
          collapsedWidth="0"
          collapsible
          collapsed={collapsed}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            right: 0,
            top: 64,
            bottom: 0,
          }}
        >
          <Menu mode="inline" defaultSelectedKeys={[current]} items={items1} />
        </Sider>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        Kay Qube Design ©2023 Created by Premar Systems Ltd
      </Footer>
    </Layout>
  );
};

export default wrapper.withRedux(appWithTranslation(App, nextI18NextConfig));
