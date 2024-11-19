import { IconHeart, IconHeartBroken } from '@tabler/icons-react';
import { RangeSlider, Slider } from '@mantine/core';

const styles = { thumb: { borderWidth: 2, height: 26, width: 26, padding: 3 } };

export function SliderIcon() {
  return (
    <>
      <Slider
        thumbChildren={<IconHeart size={16} stroke={1.5} />}
        color="red"
        label={null}
        defaultValue={40}
        styles={styles}
      />

      <RangeSlider
        mt="xl"
        styles={styles}
        color="red"
        label={null}
        defaultValue={[20, 60]}
        thumbChildren={[
          <IconHeart size={16} stroke={1.5} key="1" />,
          <IconHeartBroken size={16} stroke={1.5} key="2" />,
        ]}
      />
    </>
  );
}
