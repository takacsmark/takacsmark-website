import { loader } from 'fumadocs-core/source';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';
import { blog } from '@/.source/server';

const rawSource = toFumadocsSource(blog, []);

const source = {
  files: rawSource.files.map((file) => {
    if (file.type !== 'page') return file;
    return { ...file, slugs: [(file.data as { slug: string }).slug] };
  }),
} as typeof rawSource;

export const blogSource = loader({
  baseUrl: '/blog',
  source,
});
