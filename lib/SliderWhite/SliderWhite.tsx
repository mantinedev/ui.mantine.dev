import { IconGripHorizontal } from '@tabler/icons-react';
import { Slider } from '@mantine/core';
import classes from './SliderWhite.module.css';

export function SliderWhite() {
  return (
    <Slider
      classNames={classes}
      thumbChildren={<IconGripHorizontal size={20} stroke={1.5} />}
      defaultValue={40}
      label={null}
    />
  );
}
