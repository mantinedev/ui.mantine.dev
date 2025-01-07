import { GetStaticPaths, GetStaticProps } from 'next';
import { CategoryPage } from '../../components/CategoryPage/CategoryPage';
import { CATEGORIES_SLUGS, Category, getCategoryData } from '../../data';
import { getAllComponents, getComponentsByCategory } from '../../data/components';

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
