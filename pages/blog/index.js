import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import axios from "axios";
import api from "../../utils/api";
import replace from "../../utils/replace_vars";
import MainComponent from "../../components/MainComponent";
import Hero from "../../components/Hero";
import moment from "moment";
import "moment/locale/es";

const Blog = () => {
  const moveTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const [notices, setNotices] = useState([]);
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [BDNotices, setBDNotices] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagSelected, setTagSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    perPage: 3,
    page: 0,
    selected: 0,
    total: [],
  });

  useEffect(() => {
    obtainNews();
  }, []);

  useEffect(() => {
    if (tagSelected) {
      if (tagSelected === "TODOS") {
        setNotices(BDNotices);
      } else {
        obtainNoticesByTag();
      }
    }
  }, [tagSelected]);

  const obtainNoticesByTag = async () => {
    try {
      const resNotices = await axios.get(`${api}/news/tags/${tagSelected}`);
      setNotices(resNotices.data);
    } catch (error) {
      console.log(error);
    }
  };

  const obtainNews = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${api}/news`);
      const resCount = await axios.get(`${api}/news/count`);
      const resTags = await axios.get(`${api}/tags`);
      const {
        data: { data },
      } = await axios.get(`${api}/constant`);

      res.data.map((el) => {
        el["content"] = replace(el.content, data);
      });

      res.data.sort((a, b) =>
        moment(a.createdAt).format() > moment(b.createdAt).format() ? -1 : 1
      );
      setCategories(resCount.data);
      setTags(resTags.data.data);
      setNotices(res.data);
      setBDNotices(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (category) {
      if (category === "TODOS") {
        setNotices(BDNotices);
      } else {
        let res = BDNotices.filter((notice) => notice.category === category);
        setNotices(res);
      }
    }
  }, [category]);

  useEffect(() => {
    if (notices.length > 0) {
      let number = Math.ceil(notices.length / pagination.perPage);
      let arrtmp = [];
      for (let i = 0; i < number; i++) {
        arrtmp.push(i);
      }
      setPagination({ ...pagination, total: arrtmp });
    }
  }, [notices]);

  return (
    <MainComponent
      title="BLOG | Yuri Manuel Montenegro Barrantes"
      description="Página web | blog | Yuri Manuel Montenegro Barrantes"
    >
      <Hero title="BLOG" />
      <section className="blog-entries">
        <div className="container">
          {loading ? (
            "CARGANDO..."
          ) : (
            <div className="grid-different">
              <div className="blog-posts">
                {notices
                  .slice(
                    pagination.page * pagination.perPage,
                    pagination.page * pagination.perPage + pagination.perPage
                  )
                  .map((ev, e) => (
                    <article className="blog-post" key={e}>
                      {ev.images ? (
                        <img src={ev.images} alt={ev.title} />
                      ) : null}
                      <div className="text-content" align="left">
                        <span>
                          <span className="text">{ev.user}</span>
                          {" | "}
                          <span className="text">
                            {moment(ev.publication_date).utc(false).fromNow()}
                          </span>
                          {" | "}
                          <span className="text">{ev.description}</span>
                        </span>
                        <h4>
                          <span>{ev.title}</span>
                        </h4>
                        <span>
                          {ev.tags.map((el, i) => (
                            <Fragment key={i}>
                              <span className="text">{el.name}</span>
                              {i + 1 < ev.tags.length ? " | " : ""}
                            </Fragment>
                          ))}
                        </span>
                        <br />
                        {ev.content
                          .replace(/(<([^>]+)>)|&nbsp;/gi, " ")
                          .substring(0, 255)}
                        {ev.content.replace(/(<([^>]+)>)|&nbsp;/gi, " ")
                          .length > 255 ? (
                          <span>...</span>
                        ) : (
                          ""
                        )}
                        <div className="simple-btn">
                          <Link href={`/blog/detail?cod=${ev._id}`}>
                            <a>Continuar leyendo...</a>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}

                {pagination.total.length > 0 && (
                  <ul className="page-number">
                    {pagination.total.map((e, i) => (
                      <li
                        className={e === pagination.selected ? "active" : ""}
                        onClick={() => {
                          setPagination({
                            ...pagination,
                            selected: e,
                            page: e,
                          });
                          moveTop();
                        }}
                        key={i}
                      >
                        <p>{e + 1}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <sidebar>
                <div className="search">
                  <input
                    name="search"
                    type="text"
                    className="form-control"
                    id="search"
                    placeholder="Search..."
                    required=""
                  />
                </div>
                <div className="categories" align="left">
                  <div className="sidebar-heding">
                    <h2>Categorias</h2>
                  </div>
                  <ul>
                    {categories.map((ev, i) => (
                      <li key={i}>
                        <button onClick={() => setCategory(ev[0])}>
                          » {ev[0]} ({ev[1]})
                        </button>
                      </li>
                    ))}
                    <li>
                      <button onClick={() => setCategory("TODOS")}>
                        » TODOS ({BDNotices.length})
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="categories" align="left">
                  <div className="sidebar-heding">
                    <h2>Etiquetas</h2>
                  </div>
                  <ul>
                    {tags.map((ev, i) => (
                      <li key={i}>
                        <button onClick={() => setTagSelected(ev._id)}>
                          » {ev.name}
                        </button>
                      </li>
                    ))}
                    <li>
                      <button onClick={() => setTagSelected("TODOS")}>
                        » TODOS
                      </button>
                    </li>
                  </ul>
                </div>
              </sidebar>
            </div>
          )}
        </div>
      </section>
    </MainComponent>
  );
};

export default Blog;
