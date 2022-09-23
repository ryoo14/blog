/** @jsx h */

import blog, { ga, h } from "blog";

blog({
  title: "/var/log/ryoo14",
  description: "ざっき",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "/ryoo.svg",
  avatarClass: "rounded-full",
  author: "ryoo14",
  links: [
    { title: "GitHub", url: "https://github.com/ryoo14" },
    { title: "HOME", url: "https://uukk.life" },
  ],
  favicon: "/ry.svg",
  middlewares: [
    ga("UA-47086708-1"),
  ],
  style: `
  .markdown-body a {
    color: #ff8553;
  }
  `
});
