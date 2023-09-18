import { Slider, rem } from '@mantine/core';
import { IconGripHorizontal } from '@tabler/icons-react';
import classes from './SliderWhite.module.css';

export function SliderWhite() {
  return (
    <Slider
      classNames={classes}
      thumbChildren={
        <IconGripHorizontal style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      }
      defaultValue={40}
      label={null}
    />
  );
}
