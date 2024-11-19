import { GetStaticPaths, GetStaticProps } from 'next';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
import { UiComponent } from '../../data';
import { getAllComponents } from '../../data/components';

export default ComponentPage;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllComponents().map((component) => ({ params: { component: component.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<
  { data: UiComponent | undefined },
  { component: string }
> = (context) => {
  const allComponents = getAllComponents();
  return {
    props: {
      data: allComponents.find((component) => component.slug === context!.params!.component),
      allComponents,
    },
  };
};
