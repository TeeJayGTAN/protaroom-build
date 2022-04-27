import Head from 'next/head'
import Footer from '../components/Footer.jsx'
import Form from '../components/Form.jsx'

function contact() {
  return (
    <div>
      <Head>
        <title>Protaroom | Contact</title>
        <link rel="icon" href="../favicon64.png" />
      </Head>
      <Form />
      <Footer />
    </div>
  )
}

export default contact
