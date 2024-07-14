import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default function Home() {
  const allPostsData = getSortedPostsData();
  return (
    <>
      <section>
        <ul className="flex gap-3">
          <li>
            <a href="https://github.com/myo-shi">Github</a>
          </li>
          <li>
            <a href="https://x.com/ma_yo_ooo">Twitter</a>
          </li>
          <li>
            <a href="https://scrapbox.io/myo/">Scrapbox</a>
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl">About me</h2>
        <p className="py-3">
          Webエンジニアをやっています。
          <br />
          好きな作家は森博嗣さん。
        </p>
      </section>

      <section className="mt-4">
        <h2 className="text-2xl">Blog</h2>
        <ul className="pt-3 flex flex-col gap-2">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="list-item">
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className="">{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
