import basePath from "lume/plugins/base_path.ts";
import blog from "blog/mod.ts";
import brotli from "lume/plugins/brotli.ts";
import checkUrls from "lume/plugins/check_urls.ts";
import feed from "lume/plugins/feed.ts";
import lume from "lume/mod.ts";
import mermaid from "https://deno.land/x/lume_mermaid_plugin/mod.ts";
import picture from "lume/plugins/picture.ts";
import robots from "lume/plugins/robots.ts";
import transformImages from "lume/plugins/transform_images.ts";

const site = lume();

site.use(blog());
site.use(basePath());
site.use(brotli());
site.use(checkUrls());

site.use(picture());
site.use(transformImages());
site.use(robots());
site.use(mermaid())


site.use(feed({
  output: ["/posts.rss", "/posts.json"],
  query: "type=post",
  info: {
    title: "=site.title",
    description: "=site.description",
  },
  items: {
    title: "=title",
    description: "=excerpt",
  },
}));

export default site;
