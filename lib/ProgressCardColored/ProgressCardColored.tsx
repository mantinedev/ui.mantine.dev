import { Text, Progress, Card } from '@mantine/core';
import classes from './ProgressCardColored.module.css';

export function ProgressCardColored() {
  return (
    <Card withBorder radius="md" p="xl" className={classes.card}>
      <Text fz="xs" tt="uppercase" fw={700} className={classes.title}>
        Monthly goal
      </Text>
      <Text fz="lg" fw={500} className={classes.stats}>
        $5.431 / $10.000
      </Text>
      <Progress
        value={54.31}
        mt="md"
        size="lg"
        radius="xl"
        classNames={{
          root: classes.progressTrack,
          section: classes.progressSection,
        }}
      />
    </Card>
  );
}
