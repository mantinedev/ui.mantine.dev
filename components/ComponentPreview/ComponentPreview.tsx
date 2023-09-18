import { Box, rem } from '@mantine/core';
import { CanvasAttributes } from '../../data';

interface ComponentPreviewProps {
  children: React.ReactNode;
  canvas: CanvasAttributes['canvas'];
  withSpacing?: boolean;
}

export function ComponentPreview({ children, canvas, withSpacing = false }: ComponentPreviewProps) {
  return (
    <Box
      style={{
        paddingTop: canvas?.maxWidth && withSpacing ? rem(40) : 0,
        maxWidth: canvas?.maxWidth ? rem(canvas.maxWidth) : '100%',
        marginLeft: canvas?.center ? 'auto' : 'unset',
        marginRight: canvas?.center ? 'auto' : 'unset',
      }}
    >
      {children}
    </Box>
  );
}
