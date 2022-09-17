import { useRouter } from 'next/router';
import { Container, Title } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import { UiComponent } from '../../data';
import { ComponentCanvas } from '../ComponentCanvas/ComponentCanvas';

interface ChangelogPageProps {
  components: UiComponent[];
}

export function ChangelogPage({ components }: ChangelogPageProps) {
  const router = useRouter();
  const changelogDate = (router.query.changelog as string).replace('-', ' ');
  const canvases = components.map((component, index) => (
    <ComponentCanvas {...component} key={component.slug} zIndex={components.length - index} />
  ));

  return (
    <div>
      <Container size="xl" mt={50}>
        <Title
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            [theme.fn.smallerThan(500)]: { fontSize: 26 },
          })}
          weight={900}
          mb="xl"
        >
          New components: {upperFirst(changelogDate)}
        </Title>
        {canvases}
      </Container>
    </div>
  );
}
