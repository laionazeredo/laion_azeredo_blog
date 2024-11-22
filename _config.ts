import basePath from "lume/plugins/base_path.ts";
import blog from "blog/mod.ts";
import lume from "lume/mod.ts";

const site = lume();

site.use(blog());
site.use(basePath());

export default site;
