import { useState } from 'react';
import { NumberInput, Slider } from '@mantine/core';
import classes from './SliderInput.module.css';

export function SliderInput() {
  const [value, setValue] = useState<number | string>(2200);
  return (
    <div className={classes.wrapper}>
      <NumberInput
        value={value}
        onChange={setValue}
        label="Your daily kcal consumption"
        placeholder="2200 is an average value"
        step={50}
        min={0}
        max={8000}
        hideControls
        classNames={{ input: classes.input, label: classes.label }}
      />
      <Slider
        max={8000}
        step={50}
        min={0}
        label={null}
        value={typeof value === 'string' ? 0 : value}
        onChange={setValue}
        size={2}
        className={classes.slider}
        classNames={classes}
      />
    </div>
  );
}
