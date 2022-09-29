/*
    Recommended by Next.js for fetching data on the client-side
*/

import useSWR from 'swr';

// define the "fetcher" function.  This Can also be defined globally using SWRConfig (https://swr.vercel.app/docs/global-configuration)
const fetcher = (...args) => fetch(...args).then((res) => res.json()); 

export default function PostSWR() {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts/1', fetcher);

  return (
    <>
      <strong>User ID:</strong> {data?.userId}<br />
      <strong>Title:</strong> {data?.title}<br />
      <strong>Body:</strong> {data?.body}<br />
    </>
  );
}