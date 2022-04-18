import Link from 'next/link';
import Image from 'next/image';

const Post = ({ slug, image, title, text, excerpt, date }) => {
  const formattedTime = new Date(date).toLocaleDateString('ua-UA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <li>
      <Link href={`/posts/${slug}`}>
        <a>
          <div>
            <Image src={image} alt={title} width={500} height={333} layout="responsive" />
          </div>
          <div className="post-content">
            <h3>{title}</h3>
            <time>{formattedTime}</time>
            <p>{text}</p>
            <p>{excerpt.slice(0, 100)}...</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default Post;
