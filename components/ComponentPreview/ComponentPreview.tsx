import { Box } from '@mantine/core';
import { CanvasAttributes } from '../../data';

interface ComponentPreviewProps {
  children: React.ReactNode;
  canvas: CanvasAttributes['canvas'];
  withSpacing?: boolean;
}

export function ComponentPreview({ children, canvas, withSpacing = false }: ComponentPreviewProps) {
  return (
    <Box
      pt={canvas?.maxWidth && withSpacing ? 40 : 0}
      maw={canvas?.maxWidth ? canvas.maxWidth : '100%'}
      ml={canvas?.center ? 'auto' : 'unset'}
      mr={canvas?.center ? 'auto' : 'unset'}
    >
      {children}
    </Box>
  );
}
