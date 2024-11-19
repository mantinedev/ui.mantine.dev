import dayjs from 'dayjs';
import { useState } from 'react';
import {
  IconBike,
  IconChevronDown,
  IconChevronUp,
  IconRun,
  IconSwimming,
} from '@tabler/icons-react';
import { Group, Paper, Text, UnstyledButton } from '@mantine/core';
import classes from './StatsControls.module.css';

const data = [
  { icon: IconRun, label: 'Running' },
  { icon: IconSwimming, label: 'Swimming' },
  { icon: IconBike, label: 'Bike' },
];

export function StatsControls() {
  const [date, setDate] = useState(new Date(2021, 9, 24));

  const stats = data.map((stat) => (
    <Paper className={classes.stat} radius="md" shadow="md" p="xs" key={stat.label}>
      <stat.icon size={32} className={classes.icon} stroke={1.5} />
      <div>
        <Text className={classes.label}>{stat.label}</Text>
        <Text fz="xs" className={classes.count}>
          <span className={classes.value}>{Math.floor(Math.random() * 6 + 4)}km</span> / 10km
        </Text>
      </div>
    </Paper>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.controls}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setDate((current) => dayjs(current).add(1, 'day').toDate())}
        >
          <IconChevronUp size={16} className={classes.controlIcon} stroke={1.5} />
        </UnstyledButton>

        <div className={classes.date}>
          <Text className={classes.day}>{dayjs(date).format('DD')}</Text>
          <Text className={classes.month}>{dayjs(date).format('MMMM')}</Text>
        </div>

        <UnstyledButton
          className={classes.control}
          onClick={() => setDate((current) => dayjs(current).subtract(1, 'day').toDate())}
        >
          <IconChevronDown size={16} className={classes.controlIcon} stroke={1.5} />
        </UnstyledButton>
      </div>
      <Group style={{ flex: 1 }}>{stats}</Group>
    </div>
  );
}
