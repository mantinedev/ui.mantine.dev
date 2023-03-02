import { Text, Progress, Card } from '@mantine/core';

export function ProgressCard() {
  return (
    <Card
      withBorder
      radius="md"
      padding="xl"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      })}
    >
      <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
        Monthly goal
      </Text>
      <Text fz="lg" fw={500}>
        $5.431 / $10.000
      </Text>
      <Progress value={54.31} mt="md" size="lg" radius="xl" />
    </Card>
  );
}
