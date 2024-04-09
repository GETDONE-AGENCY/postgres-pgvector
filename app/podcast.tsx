// app/podcast.tsx

import { FC } from 'react';
import Link from 'next/link';

const Podcast: FC = () => {
  return (
    <div>
      <h1>Podcast Page</h1>
      <p>Welcome to our podcast page!</p>
      <Link href="/">Go back home</Link>
    </div>
  );
};

export default Podcast;
