// @ts-nocheck
import * as __fd_glob_1 from "../content/blog/2026-03-05-moving-to-coding-factory/index.mdx?collection=blog"
import * as __fd_glob_0 from "../content/blog/2026-03-04-blog-reboot.mdx?collection=blog"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const blog = await create.doc("blog", "content/blog", {"2026-03-04-blog-reboot.mdx": __fd_glob_0, "2026-03-05-moving-to-coding-factory/index.mdx": __fd_glob_1, });