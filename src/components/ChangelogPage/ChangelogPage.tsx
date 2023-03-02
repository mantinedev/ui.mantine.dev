import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container, Title, Text, rem } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import { UiComponent } from '../../data';
import { ComponentCanvas } from '../ComponentCanvas/ComponentCanvas';

interface ChangelogPageProps {
  components: UiComponent[];
}

export function ChangelogPage({ components }: ChangelogPageProps) {
  const router = useRouter();
  const title = `New components: ${upperFirst(
    (router.query.changelog as string).replace('-', ' ')
  )}`;
  const canvases = components.map((component, index) => (
    <ComponentCanvas {...component} key={component.slug} zIndex={components.length - index} />
  ));

  return (
    <>
      <Head>
        <title>{`${title} | Mantine UI`}</title>
      </Head>
      <Container size="xl" mt={50}>
        <Title
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            [theme.fn.smallerThan(500)]: { fontSize: rem(26) },
          })}
          fw={900}
        >
          {title}
        </Title>
        <Text size="sm" color="dimmed" mb="xl" mt="sm">
          {components.length} new components were added
        </Text>
        {canvases}
      </Container>
    </>
  );
}
