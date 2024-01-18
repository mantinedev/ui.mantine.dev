import { Container } from '@mantine/core';
import Head from 'next/head';
import { ComponentCanvas } from '../ComponentCanvas/ComponentCanvas';
import { CategoryHeader } from '../CategoryHeader/CategoryHeader';
import { Category, UiComponent } from '../../data';
import { Shell } from '../Shell';

interface CategoryPageProps {
  category: Category;
  components: UiComponent[];
}

export function CategoryPage({ category, components }: CategoryPageProps) {
  const canvases = components.map((component, index) => (
    <ComponentCanvas {...component} key={component.slug} zIndex={components.length - index} />
  ));

  const title = `${category.name} | Mantine UI`;

  return (
    <Shell>
      <Head>
        <title>{title}</title>
        <meta itemProp="name" content={title} key="item-title" />
        <meta property="og:title" content={title} key="og-title" />
        <meta name="twitter:title" content={title} key="twitter-title" />
        <meta
          property="og:url"
          content={`https://ui.mantine.dev/category/${category.slug}`}
          key="og-url"
        />
      </Head>
      <Container size="xl" mt={50}>
        <CategoryHeader category={category} />
        {canvases}
      </Container>
    </Shell>
  );
}
