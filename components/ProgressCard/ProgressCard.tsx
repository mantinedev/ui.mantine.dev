import { Text, Progress, Card } from '@mantine/core';

export function ProgressCard() {
  return (
    <Card
      withBorder
      radius="md"
      p="xl"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      })}
    >
      <Text size="xs" transform="uppercase" weight={700} color="dimmed">
        Monthly goal
      </Text>
      <Text size="lg" weight={500}>
        $5.431 / $10.000
      </Text>
      <Progress value={54.31} mt="md" size="lg" radius="xl" />
    </Card>
  );
}
