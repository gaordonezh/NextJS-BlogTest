import React, { useState, useEffect, Fragment } from "react";
import NavBar from "./../Navbar";
import Footer from "./../Footer";
import Head from "next/head";

const Layout = ({ children, title, description, keywords, image }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <Fragment>
      <div id="video">
        {loading ? (
          <div className="preloader">
            <div className="preloader-bounce">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : null}

        <video autoPlay muted loop>
          <source
            src="https://filesym.s3.us-east-2.amazonaws.com/YMBackground.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Yuri Manuel Montenegro Barrantes" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yurimontenegro.com/" />
        <meta property="og:site_name" content="yurimontenegro.com" />
        <meta
          property="article:publisher"
          content="https://yurimontenegro.com/"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Head>
      <div>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "Yuri Manuel Montenegro Barrantes",
  description: "Página web de Yuri Manuel Montenegro Barrantes",
  keywords:
    "Yuri Montenegro, Yuri, Yuri Montenegro, Blog, Noticias, Leyes, Contable",
  image: "https://filesdic.s3.us-east-2.amazonaws.com/imgSchool/logo-ym.png",
};
