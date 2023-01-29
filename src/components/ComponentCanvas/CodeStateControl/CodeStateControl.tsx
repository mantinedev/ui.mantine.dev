import { ActionIcon, Tooltip } from '@mantine/core';
import { IconCode, IconDatabase } from '@tabler/icons-react-react';

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
      transition="fade"
    >
      <ActionIcon
        onClick={onToggle}
        sx={{ position: 'absolute', top: 42, right: 10, zIndex: 1000 }}
      >
        <Icon size={16} stroke={1.5} />
      </ActionIcon>
    </Tooltip>
  );
}
