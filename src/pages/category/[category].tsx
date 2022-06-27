import { GetStaticPaths, GetStaticProps } from 'next';
import { CATEGORIES_SLUGS, getCategoryData, Category } from '../../data';
import { getAllComponents, getComponentsByCategory } from '../../data/components';
import { CategoryPage } from '../../components/CategoryPage/CategoryPage';

export default CategoryPage;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: CATEGORIES_SLUGS.map((slug) => ({ params: { category: slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<
  { category: Category | undefined },
  { category: string }
> = (context) => ({
  props: {
    category: getCategoryData(context!.params!.category),
    components: getComponentsByCategory()[context!.params!.category],
    allComponents: getAllComponents(),
  },
});
