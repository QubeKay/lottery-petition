import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button, Card, Col, Row } from "antd";
import { ShareAltOutlined, FacebookOutlined } from "@ant-design/icons";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const { Meta } = Card;

function Home({ t, i18n }) {
  return (
    <div>
      <Head>
        <title>About :: Petition & Ndirangu Gachunia</title>
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
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta
              title="Ndirangu Gachunia"
              description="CS Public Service, Nyeri County & CEO, CEREB : Sed euismod cursus nibh a condimentum. Nulla venenatis scelerisque massa. Aliquam justo orci, venenatis ut justo vitae, rutrum placerat risus. Praesent luctus eros vel tellus ultricies lobortis. Praesent dignissim urna commodo massa pellentesque pulvinar. Nullam commodo malesuada tristique."
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card
            // hoverable
            style={{ height: "100%" }}
            actions={[
              <Button type="dashed" icon={<FacebookOutlined />}>
                See Facebook Post
              </Button>,
            ]}
          >
            <Meta
              title="CS Ndirangu Gachunia's Commitment"
              description={
                <p>
                  I listen to kikuyu Radio especially when driving. I like Sec
                  Gen and Board Chair coz l find them intelligent. But one
                  annoying thing that makes me switch off is the lottery. The
                  continuous advertising of people gambling to win some price is
                  driving our community in the wrong direction. I am the CEO
                  Central Region economic Bloc and I think about the Mountain
                  (ruriri) economically more often than not. We are the
                  entrepreneurial capital of the nation contributing 28% of the
                  GDP with a 10% population and owning 60% of Nairobi. Fact.
                  Lotteries are 'retrogressive taxes' on low income earners.
                  Hardly can you find successive people or men of real faith
                  playing lotteries. If on some dumb day I played and won I
                  would pay someone to pose on that photo. I can't live life
                  defined by randomness. We cannot feed our new generation that
                  success comes from LUCK and external factors. Successful
                  people according to Marshall Goldsmith believe that success
                  comes from sheer force of personality , talent, brainpower and
                  your inner drive. Given a chance i would bet on myself. This
                  gives me power to go to work and compete like a pro even when
                  everything else tells me not to. Am blind to negativity,
                  destiny crashers, excuses and naysayers. You put a block on my
                  path of progress and like a river i must find the strength to
                  navigate and keep walking like mutembei. Our media must
                  reflect our reality. They must stay true to our dreams and
                  aspirations as a community not feeding us garbage daily and
                  hoping for the best. They must account for every suicide,
                  broken home and all on the account of failed gambling. I find
                  it very insulting when it's linked to Faith in the God that I
                  believe in. Trail your trash as we say in the Circular Economy
                  . Account for your victims because they contribute to your
                  daily Harambees. Happy Holidays
                </p>
              }
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card style={{ height: '100%' }}>
            <Meta
              title="Ndirangu Gachunia on Nyeri Mohoro NewsHub"
              description={
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=321&href=https%3A%2F%2Fwww.facebook.com%2Fnyerimohoro%2Fvideos%2F690811256087604%2F&show_text=true&width=560&t=0"
                  width="100%"
                  // height="1000"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen="true"
                ></iframe>
              }
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export { Home };
export default withTranslation()(Home);
