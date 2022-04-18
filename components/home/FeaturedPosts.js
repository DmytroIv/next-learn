import PostsGrid from '@/components/posts/PostsGrid';

const FeaturedPosts = ({ posts }) => {
  return (
    <section className="posts-latest">
      <h2>Featured posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
