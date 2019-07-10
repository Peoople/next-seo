import React, { FC } from 'react';
import Head from 'next/head';

import markup from '../utils/markup';

export interface MovieJsonLdProps {
  actors: string[];
  name: string;
  description: string;
}

const MovieJsonLd: FC<MovieJsonLdProps> = ({
  actors = [],
  name,
  description,
}) => {
  const jslonld = `{
    "@context": "http://schema.org",
    "@type": "Movie",
    "name": "${name}",
    "description": "${description}",
    "actor": [
        ${actors.map((actor: string) => {
          return `{"@type": "Person", name:"${actor}"}`;
        })}
    ]
  }`;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={markup(jslonld)}
        key="jsonld-movie"
      />
    </Head>
  );
};

export default MovieJsonLd;
