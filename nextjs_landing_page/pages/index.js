import Layout from "../components/Layout";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Feature from '../components/Feature';
import Service from '../components/Service';
import About from '../components/About';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <Layout pageTitle="Landing Page Nextjs">
      <Header />
      <Introduction />
      <Feature/>
      <Service />
      <About />
      <Footer />
    </Layout>
  )
}

export default Index;
