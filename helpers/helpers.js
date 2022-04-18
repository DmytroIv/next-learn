import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postDir = path.join(process.cwd(), 'db/posts');

export const getPostFiles = () => {
  return fs.readdirSync(postDir);
};

export const getPostData = (fileName) => {
  const file = ~fileName.indexOf('.md') ? fileName : `${fileName}.md`;
  const filePath = path.join(postDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    ...data,
    date: `${data.date}`,
    slug: fileName.replace(/\.md$/, ''),
    content,
  };
};

export const getAllPosts = () => {
  const postFiles = getPostFiles();
  const allPosts = postFiles.map((file) => getPostData(file));
  return allPosts.sort((postA, postB) => {
    return postA.date > postB.date ? -1 : 1;
  });
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.isFeatured);
};
