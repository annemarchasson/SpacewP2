import React from "react";
import "./ModelHome.scss";

function ModelHome() {
  return (
    <body>
      <header>navbar</header>
      <div className="contenair">
        <section className="contenair-card">
          <div className="card">card</div>
          <div className="card">card</div>
        </section>
        <article className="contenair-article">
          <div className="article">article</div>
          <div className="article">article</div>
          <div className="article">article</div>
        </article>
      </div>
      <footer> footer</footer>
    </body>
  );
}

export default ModelHome;
