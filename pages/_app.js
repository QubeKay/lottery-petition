import React, { useState } from "react";
import "../styles/globals.css";
import { useRouter } from "next/router";

// translation
import { appWithTranslation } from "next-i18next";
import { useTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config.js";

// firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// redux
import { wrapper } from "../store/store";
import { Provider } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";
// import { todosLoading, fetchTodos } from "../store/layout/layoutSlice";

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

const firebaseConfig = {
  apiKey: "AIzaSyCx4lm2MsKZEellzn0YsEyvTx0b0dBIaR8",
  authDomain: "lottery-petition.firebaseapp.com",
  projectId: "lottery-petition",
  storageBucket: "lottery-petition.appspot.com",
  messagingSenderId: "573570078323",
  appId: "1:573570078323:web:51147d0b5ac0dad4c2fc06",
  measurementId: "G-TQ43Q594YM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  // const { layout } = useSelector((state) => state);
  // const dispatch = useDispatch();

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
      key: "/",
      icon: <AimOutlined />,
      label: t("menu.petition"),
    },
    {
      key: "about",
      icon: <InfoCircleOutlined />,
      label: t("menu.about"),
    },
    {
      key: "supporters",
      icon: <TeamOutlined />,
      label: t("menu.supporters"),
    },
    {
      key: "contacts",
      icon: <PhoneOutlined />,
      label: t("menu.contacts"),
    },
    {
      key: "lang",
      icon: <TranslationOutlined />,
      label: t("menu.translation"),
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
        router.push(e.key);
        // dispatch(fetchTodos());
        break;
    }
    setCollapsed(true);
  };

  return (
    <Provider store={store}>
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            padding: 0,
            paddingRight: 24,
            background: colorBgContainer,
          }}
          onClick={() => setCollapsed(true)}
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
                onClick={(e) => {
                  setCollapsed(!collapsed);
                  e.stopPropagation();
                }}
                className="trigger"
              >
                {collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
              </Button>
            </Col>
          </Row>
        </Header>
        <Layout className="site-layout">
          <Content
            onClick={() => setCollapsed(true)}
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "100vh",
              // background: colorBgContainer,
            }}
          >
            <Component {...props.pageProps} db={db} />
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
            <Menu
              onClick={onMenuClicked}
              mode="inline"
              defaultSelectedKeys={[current]}
              items={items1}
            />
          </Sider>
        </Layout>
        <Footer
          onClick={() => setCollapsed(true)}
          style={{ textAlign: "center" }}
        >
          Kay Qube Design ©2023 Created by Premar Systems Ltd
        </Footer>
      </Layout>
    </Provider>
  );
};

export default appWithTranslation(App, nextI18NextConfig);
