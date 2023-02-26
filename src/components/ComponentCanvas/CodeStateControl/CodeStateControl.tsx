import { ActionIcon, rem, Tooltip } from '@mantine/core';
import { IconCode, IconDatabase } from '@tabler/icons-react';

interface CodeStateControlProps {
  state: 'code' | 'mockdata';
  onToggle(): void;
}

export function CodeStateControl({ state, onToggle }: CodeStateControlProps) {
  const Icon = state === 'code' ? IconDatabase : IconCode;
  return (
    <Tooltip
      label={`View ${state === 'code' ? 'mockdata' : 'code'}`}
      position="left"
      withArrow
      arrowSize={4}
    >
      <ActionIcon
        onClick={onToggle}
        sx={{ position: 'absolute', top: rem(42), right: rem(10), zIndex: 1000 }}
      >
        <Icon size="1rem" stroke={1.5} />
      </ActionIcon>
    </Tooltip>
  );
}
