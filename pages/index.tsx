import { GetStaticProps } from 'next';
import { HomePage } from '../components/HomePage/HomePage';
import { countComponentsByCategory, getAllComponents } from '../data/components';

export default HomePage;

export const getStaticProps: GetStaticProps = () => ({
  props: {
    componentsCountByCategory: countComponentsByCategory(),
    allComponents: getAllComponents(),
  },
});
