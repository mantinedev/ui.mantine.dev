import { RangeSlider, rem } from '@mantine/core';
import { IconPoint, IconGripVertical } from '@tabler/icons-react';
import classes from './SliderMarks.module.css';

const point = (
  <IconPoint style={{ marginTop: rem(6), width: rem(10), height: rem(10) }} stroke={1.5} />
);

export function SliderMarks() {
  return (
    <RangeSlider
      mt="xl"
      mb="xl"
      classNames={classes}
      defaultValue={[30, 60]}
      thumbChildren={<IconGripVertical style={{ width: rem(20), height: rem(20) }} stroke={1.5} />}
      marks={[
        { value: 0, label: '0' },
        { value: 12.5, label: point },
        { value: 25, label: '25' },
        { value: 37.5, label: point },
        { value: 50, label: '50' },
        { value: 62.5, label: point },
        { value: 75, label: '75' },
        { value: 87.5, label: point },
        { value: 100, label: '100' },
      ]}
    />
  );
}
