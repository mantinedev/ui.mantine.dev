import React from 'react';
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconCode as Code, IconDatabase as Database } from '@tabler/icons';

interface CodeStateControlProps {
  state: 'code' | 'mockdata';
  onToggle(): void;
}

export function CodeStateControl({ state, onToggle }: CodeStateControlProps) {
  const Icon = state === 'code' ? Database : Code;
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
        <Icon size={16} />
      </ActionIcon>
    </Tooltip>
  );
}
