import { ActionIcon, Tooltip } from '@mantine/core';
import { IconCode, IconDatabase } from '@tabler/icons';

interface CodeStateControlProps {
  state: 'code' | 'mockdata';
  onToggle(): void;
}

export function CodeStateControl({ state, onToggle }: CodeStateControlProps) {
  const Icon = state === 'code' ? IconDatabase : IconCode;
  return (
    <Tooltip
      label={`View ${state === 'code' ? 'mockdata' : 'code'}`}
      sx={{ position: 'absolute', top: 42, right: 10, zIndex: 1000 }}
      position="left"
      withArrow
      arrowSize={4}
      transition="fade"
    >
      <ActionIcon onClick={onToggle}>
        <Icon size={16} stroke={1.5} />
      </ActionIcon>
    </Tooltip>
  );
}
