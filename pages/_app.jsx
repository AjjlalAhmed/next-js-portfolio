import "../styles/styles.css";
// Importing thing we need
import Head from "next/head";
import Nav from "../components/Nav";
// Main function
function MyApp({ Component, pageProps }) {
  // Returning jsx
  return (
    // Container
    <div className="container">
      {/* Setting meta info  */}
      <Head>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        />
        <title>Ajjlal Ahmed</title>
        <meta name="title" content="Ajjlal Ahmed"></meta>
        <meta
          name="description"
          content="I'm a self-taught passionate Full Stack Developer from Pakistan PK. I love being in this line of work because I'm passionate about technology and innovation."
        ></meta>
        <meta
          name="keywords"
          content="HTML,CSS,JAVASCRIPT,VUE,NODE,WEBSITE,PORTFOIO,AJJLAL AHMED,AJJLAL,AHMED"
        ></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <meta name="language" content="English"></meta>
      </Head>
      {/* Nav  */}
      <Nav />
      {/* All pages  */}
      <Component {...pageProps} />
    </div>
    // Container
  );
}
// Exporting Main Function
export default MyApp;
