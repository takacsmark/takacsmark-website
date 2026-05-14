// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  blog: create.doc("blog", {"2026-03-04-blog-reboot.mdx": () => import("../content/blog/2026-03-04-blog-reboot.mdx?collection=blog"), "2026-03-05-moving-to-coding-factory/index.mdx": () => import("../content/blog/2026-03-05-moving-to-coding-factory/index.mdx?collection=blog"), }),
};
export default browserCollections;