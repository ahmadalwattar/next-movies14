import Image from "next/image";
import Results from "./components/results";

const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}) {
  const genre = searchParams.genre || "fetchTrending";
  {/* For Loading */}
  await new Promise ((resolve) => {setTimeout(() => {resolve()}, 2000)}) ;

  {/* For Fetch */}
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 1000 }}
    
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }

  const data =await res.json();
  const results = data.results;

  console.log(results);

  // const res2 = await fetch(`https://api.themoviedb.org/3/trending/movie/week?language=en-US?api_key=${API_KEY}`);

  return (
    <div>
    <Results results={results} />
    </div>
  );
}
