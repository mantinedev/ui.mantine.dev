import { GetStaticPaths, GetStaticProps } from 'next';
import { ChangelogPage } from '../../components/ChangelogPage/ChangelogPage';
import { UiComponent } from '../../data';
import {
  getAllChangelogs,
  getAllComponents,
  getComponentsByChangelog,
} from '../../data/components';

export default ChangelogPage;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllChangelogs().map((changelog) => ({ params: { changelog } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<
  { components: UiComponent[] },
  { changelog: string }
> = (context) => {
  const components = getComponentsByChangelog(context!.params!.changelog);
  const allComponents = getAllComponents();
  return { props: { components, allComponents } };
};
