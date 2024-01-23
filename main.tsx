/** @jsx h */

import blog, { ga, h } from "blog";

blog({
  title: "/var/log/ryoo14",
  description: "ざっき",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "/ryoo3.svg",
  avatarClass: "rounded-full",
  author: "ryoo14",
  links: [
    { title: "GitHub", url: "https://github.com/ryoo14" },
    { title: "HOME", url: "https://ryoo.cc" },
  ],
  favicon: "/favicon-32x32.png",
  middlewares: [
    ga("G-XF4Z63PW5M"),
  ],
  style: `
    body {
    color: #fffcf9;
    background-color: #292f36;
  }
  .markdown-body a {
    color: #fd8550;
  }
  li {
    list-style: circle;
  }
  `
});
