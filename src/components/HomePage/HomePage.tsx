import Head from 'next/head';
import { CATEGORIES } from '../../data';
import { Banner } from './Banner/Banner';
import { CategoriesList } from './CategoriesList/CategoriesList';

interface HomePageProps {
  componentsCountByCategory: Record<string, number>;
}

export function HomePage({ componentsCountByCategory }: HomePageProps) {
  const allComponentsCount = Object.keys(componentsCountByCategory).reduce(
    (acc, category) => acc + componentsCountByCategory[category],
    0
  );

  return (
    <>
      <Head>
        <title>Mantine UI</title>
      </Head>
      <Banner componentsCount={allComponentsCount} />
      <div id="main">
        <CategoriesList groups={CATEGORIES} componentsCountByCategory={componentsCountByCategory} />
      </div>
    </>
  );
}
