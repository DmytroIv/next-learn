import PostsGrid from '@/components/posts/PostsGrid';
import { getAllPosts } from '@/helpers/helpers';

const Posts = ({ posts }) => {
  return (
    <div className="posts-all">
      <h2>All posts page</h2>
      <PostsGrid posts={posts} />
    </div>
  );
};

export function getStaticProps() {
  const featuredPosts = getAllPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60, // TODO useless due to when we adding a new post we need to redeploy
  };
}

export default Posts;
