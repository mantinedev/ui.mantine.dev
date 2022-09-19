import { Text, Progress, Card, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.fn.primaryColor(),
  },

  title: {
    color: theme.fn.rgba(theme.white, 0.65),
  },

  stats: {
    color: theme.white,
  },

  progressBar: {
    backgroundColor: theme.white,
  },

  progressTrack: {
    backgroundColor: theme.fn.rgba(theme.white, 0.4),
  },
}));

export function ProgressCardColored() {
  const { classes } = useStyles();
  return (
    <Card withBorder radius="md" p="xl" className={classes.card}>
      <Text size="xs" transform="uppercase" weight={700} className={classes.title}>
        Monthly goal
      </Text>
      <Text size="lg" weight={500} className={classes.stats}>
        $5.431 / $10.000
      </Text>
      <Progress
        value={54.31}
        mt="md"
        size="lg"
        radius="xl"
        classNames={{
          root: classes.progressTrack,
          bar: classes.progressBar,
        }}
      />
    </Card>
  );
}
