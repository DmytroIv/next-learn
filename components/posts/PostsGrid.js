import PostItem from '@/components/posts/PostItem';

const PostsGrid = ({ posts }) => {
  return (
    <ul>
      {posts.map((post, i) => (
        <PostItem key={i} {...post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
