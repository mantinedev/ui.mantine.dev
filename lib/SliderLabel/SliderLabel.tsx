import { RangeSlider } from '@mantine/core';
import classes from './SliderLabel.module.css';

export function SliderLabel() {
  return <RangeSlider labelAlwaysOn defaultValue={[20, 60]} classNames={classes} />;
}
