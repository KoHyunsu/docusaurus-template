import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Message 1',
    Svg: require('@site/static/img/ideas.svg').default,
    description: (
      <>
        문구 1
      </>
    ),
  },
  {
    title: 'Message 2',
    Svg: require('@site/static/img/scrum.svg').default,
    description: (
      <>
        문구 2
      </>
    ),
  },
  {
    title: 'Message 3',
    Svg: require('@site/static/img/education.svg').default,
    description: (
      <>
        문구 3
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
