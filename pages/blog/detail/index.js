import React, { useState, useEffect } from "react";
import api from "../../../utils/api";
import MainComponent from "../../../components/MainComponent";
import replace from "../../../utils/replace_vars";
import Link from "next/link";
import Hero from "../../../components/Hero";
import moment from "moment";
import CommentaryBox from "../../../components/CommentaryBox";

const BlogDetail = () => {
  const [notice, setNotice] = useState(null);
  const [comments, setComments] = useState([]);
  const [parametro, setParametro] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let param = new URLSearchParams(location.search).get("cod");
    setParametro(param);
  }, []);

  useEffect(() => {
    if (Boolean(parametro)) {
      obtainData();
    }
  }, [parametro]);

  const obtainData = async () => {
    try {
      const res = await fetch(`${api}/news/${parametro}`);
      const resConstants = await fetch(`${api}/constant`);
      const news = await res.json();
      const constants = await resConstants.json();

      news.notice.content = await replace(news.notice.content, constants.data);

      setNotice(news.notice);
      setComments(news.comments);
    } catch (error) {
      setNotFound(true);
    }
  };

  return (
    <MainComponent
      title={notice ? notice.title : "Yuri Montenegro"}
      description={notice && notice.description}
      keywords={notice && notice.keywords}
      image={notice && notice.images}
    >
      {notFound ? (
        <div className="notfound">
          <h3>PUBLICACIÓN NO ENCONTRADA</h3>
          <Link href="/blog">
            <button>VOLVER</button>
          </Link>
        </div>
      ) : (
        <>
          <Hero title={notice && notice.title} />
          {notice && (
            <section className="blog-entries">
              <div className="container">
                <div className="grid-different">
                  <div className="blog-posts">
                    <article className="blog-post">
                      <div className="text-content" align="left">
                        <span>
                          <span className="text">{notice.user}</span>
                          {" | "}
                          <span className="text">
                            {moment(notice.publication_date)
                              .utc(false)
                              .fromNow()}
                          </span>
                          {" | "}
                          <span className="text">{notice.category}</span>
                        </span>
                        <h2>{notice.description}</h2>
                        <div
                          dangerouslySetInnerHTML={{ __html: notice.content }}
                        />
                        {notice.file && (
                          <>
                            <br /> <br />
                            <object
                              type="application/pdf"
                              data={notice.file}
                              style={{
                                width: "100%",
                                height: 500,
                                marginBottom: "20px",
                              }}
                            >
                              <p>Error al tratar de obtener el pdf</p>
                            </object>
                            <a
                              href={notice.file}
                              target="_blank"
                              download
                              rel="noreferrer"
                              style={{
                                textDecoration: "none",
                                color: "white",
                                padding: "10px",
                                backgroundColor: "#0099ff",
                                borderRadius: "5px",
                              }}
                            >
                              Descargar PDF
                            </a>
                          </>
                        )}
                      </div>
                    </article>
                  </div>
                  <figure>
                    {notice.images && (
                      <img
                        src={notice.images}
                        width="100%"
                        alt={notice.title}
                        className="img_content"
                      />
                    )}
                  </figure>
                </div>
              </div>
              <div className="simple-btn">
                <Link href="/blog">VOLVER</Link>
              </div>
            </section>
          )}
          <CommentaryBox
            comments={comments}
            notice={notice}
            obtainNews={obtainData}
          />
        </>
      )}
    </MainComponent>
  );
};

export default BlogDetail;
