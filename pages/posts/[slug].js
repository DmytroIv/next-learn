import Image from 'next/image';
import PostHeader from '@/components/post-details/PostHeader';
import ReactMarkdown from 'react-markdown';
import { getPostData, getPostFiles } from '@/helpers/helpers';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

const Post = ({ post }) => {
  const customComponents = {
    image(img) {
      return <Image src={img.src} height={300} width={300} />;
    },
    code(code) {
      const { className, children } = code;
      return <SyntaxHighlighter style={atomDark} language={className.replace(/language-/, '')} children={children} />;
    },
  };

  return (
    <div className="post-details">
      <PostHeader img={post.image} title={post.title} />
      <div className="post-details-content">
        <ReactMarkdown components={customComponents}>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  const post = getPostData(slug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFiles = getPostFiles();
  const slugs = postFiles.map((file) => file.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}

export default Post;
