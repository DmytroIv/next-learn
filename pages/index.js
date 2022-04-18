import Head from 'next/head';
import Hero from '@/components/home/Hero';
import FeaturedPosts from '@/components/home/FeaturedPosts';
import { getFeaturedPosts } from '@/helpers/helpers';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60, // TODO useless due to when we adding a new post we need to redeploy
  };
}
