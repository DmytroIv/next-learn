import Image from 'next/image';

const PostHeader = ({ title, img }) => {
  return (
    <div className="post-details-header">
      <Image src={img} width={120} height={120} />
      <h1>{title}</h1>
    </div>
  );
};

export default PostHeader;
