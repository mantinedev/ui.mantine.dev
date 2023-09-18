import { SegmentedControl } from '@mantine/core';
import classes from './GradientSegmentedControl.module.css';

export function GradientSegmentedControl() {
  return (
    <SegmentedControl
      radius="xl"
      size="md"
      data={['All', 'AI/ML', 'C++', 'Rust', 'TypeScript']}
      classNames={classes}
    />
  );
}
