import { Select, TextInput } from '@mantine/core';
import classes from './ContainedInput.module.css';

export function ContainedInputs() {
  return (
    <>
      <TextInput label="Shipping address" placeholder="15329 Huston 21st" classNames={classes} />

      <Select
        mt="md"
        comboboxProps={{ withinPortal: true }}
        data={['React', 'Angular', 'Svelte', 'Vue']}
        placeholder="Pick one"
        label="Your favorite library/framework"
        classNames={classes}
      />
    </>
  );
}
