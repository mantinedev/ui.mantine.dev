import { GithubIcon } from '@mantinex/dev-icons';
import { IconExternalLink, IconCode, IconEye } from '@tabler/icons-react';
import { Group, Text, ActionIcon, Badge, SegmentedControl, Center, Box } from '@mantine/core';
import { ColorControl } from '../ColorControl/ColorControl';
import { UiComponent } from '../../../data';
import classes from './CanvasHeader.module.css';

export interface CanvasHeaderProps extends UiComponent, React.ComponentPropsWithoutRef<'div'> {
  state: string;
  onStateChange(state: string): void;
  onPrimaryColorChange(color: string): void;
  primaryColor: string;
  excludeExternal?: boolean;
  zIndex?: number;
}

export function CanvasHeader({
  attributes,
  slug,
  component,
  state,
  onStateChange,
  primaryColor,
  onPrimaryColorChange,
  excludeExternal = false,
  zIndex,
  ...others
}: CanvasHeaderProps) {
  return (
    <div className={classes.header} {...others}>
      <Group>
        <Box id={slug} style={{ visibility: 'hidden', position: 'absolute', top: -75 }} />
        <Text fw={500} mr="md" component="a" href={`#${slug}`}>
          {attributes.title}
        </Text>

        <Group gap="xs" className={classes.actions}>
          {!excludeExternal && (
            <ActionIcon
              variant="default"
              className={classes.action}
              title="View component in isolation"
              component="a"
              href={`/component/${slug}`}
              target="_blank"
            >
              <IconExternalLink size="0.9rem" stroke={1.5} />
            </ActionIcon>
          )}

          <ActionIcon
            variant="default"
            className={classes.action}
            title="View source on github"
            component="a"
            href={`https://github.com/mantinedev/ui.mantine.dev/tree/master/lib/${component}/${component}.tsx`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size="0.9rem" />
          </ActionIcon>

          {attributes.responsive && <Badge variant="light">Responsive</Badge>}
        </Group>
      </Group>

      <Group className={classes.controls}>
        {attributes.withColor && (
          <ColorControl onChange={onPrimaryColorChange} value={primaryColor} />
        )}
        <SegmentedControl
          value={state}
          onChange={onStateChange}
          data={[
            {
              value: 'preview',
              label: (
                <Center>
                  <IconEye size="1rem" stroke={1.5} />
                  <div className={classes.controlLabel}>Preview</div>
                </Center>
              ),
            },
            {
              value: 'code',
              label: (
                <Center>
                  <IconCode size="1rem" stroke={1.5} />
                  <div className={classes.controlLabel}>Code</div>
                </Center>
              ),
            },
          ]}
        />
      </Group>
    </div>
  );
}
