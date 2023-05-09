import Headers from '@/components/Headers';
import Nav from '@/components/Nav';
import axios from 'axios';
import Head from 'next/head';
import requests from '@/utils/requests';
import Results from '@/components/Results';
import Thumbnail from '@/components/Thumbnail';

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
      </Head>
      <Headers />
      <Nav />
      <Results results={results} />
      <Thumbnail />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3${requests[genre]?.url || requests?.fetchTrending.url}`
    );
    return {
      props: {
        results: response.data.results,
      },
    };
  } catch (error) {
    return {
      props: {
        results: [],
      },
    };
  };
};