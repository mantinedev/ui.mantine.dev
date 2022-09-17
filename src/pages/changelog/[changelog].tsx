import { GetStaticPaths, GetStaticProps } from 'next';
import { UiComponent } from '../../data';
import {
  getAllChangelogs,
  getComponentsByChangelog,
  getAllComponents,
} from '../../data/components';
import { ChangelogPage } from '../../components/ChangelogPage/ChangelogPage';

export default ChangelogPage;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllChangelogs().map((changelog) => ({ params: { changelog } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ components: UiComponent[] }, { changelog: string }> =
  (context) => {
    const components = getComponentsByChangelog(context!.params!.changelog);
    const allComponents = getAllComponents();
    return { props: { components, allComponents } };
  };
