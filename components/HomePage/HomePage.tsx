import { CATEGORIES } from '../../data';
import { Shell } from '../Shell';
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
    <Shell>
      <Banner componentsCount={allComponentsCount} />
      <div id="main">
        <CategoriesList groups={CATEGORIES} componentsCountByCategory={componentsCountByCategory} />
      </div>
    </Shell>
  );
}
