// pages/index.js
import Link from "next/link";

const Home = ({ blog }) => {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;

export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch(
    "https://sample-jamstack.microcms.io/api/v1/blog",
    key
  )
    .then((res) => res.json())
    .catch(() => null);

  return {
    props: {
      blog: data.contents,
    },
  };
};
