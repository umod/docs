import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Universal',
    slug: 'universal',
    image: require('../../static/img/universal.png').default,
  },
  {
    title: 'Rust',
    slug: 'games/rust',
    image: require('../../static/img/games/rust.png').default,
  },
];

function Feature({image, title, slug}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link
          to={`/docs/${slug}/intro`}>
          <img src={image} className={styles.featureImage} alt={title} />
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
