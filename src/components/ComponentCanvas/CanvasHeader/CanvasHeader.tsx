import { GithubIcon } from '@mantine/ds';
import { IconExternalLink, IconComponents, IconCode, IconEye } from '@tabler/icons-react';
import {
  Group,
  Text,
  ActionIcon,
  Menu,
  Badge,
  SegmentedControl,
  Center,
  Anchor,
  Box,
} from '@mantine/core';
import { ColorControl } from '../ColorControl/ColorControl';
import { getDependencyInfo } from './get-dependency-info';
import { UiComponent } from '../../../data';
import useStyles from './CanvasHeader.styles';

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
  const { classes } = useStyles();
  const dependencies = attributes.dependencies.map(getDependencyInfo).map((dependency) => (
    <Menu.Item
      component="a"
      href={dependency.url}
      target="_blank"
      key={dependency.url}
      icon={dependency.icon}
    >
      {dependency.name}
    </Menu.Item>
  ));

  return (
    <div className={classes.header} {...others}>
      <Group>
        <Box id={slug} sx={{ visibility: 'hidden', position: 'absolute', top: -75 }} />
        <Text weight={500} mr="md" component="a" href={`#${slug}`}>
          {attributes.title}
        </Text>

        <Group spacing="xs" className={classes.actions}>
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
            href={`https://github.com/mantinedev/ui.mantine.dev/tree/master/components/${component}/${component}.tsx`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size="0.9rem" />
          </ActionIcon>

          <Menu
            withArrow
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right', duration: 100 }}
            withinPortal
          >
            <Menu.Target>
              <ActionIcon
                className={classes.action}
                title="Component dependencies"
                variant="default"
              >
                <IconComponents size="1rem" stroke={1.5} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Component dependencies</Menu.Label>
              {dependencies}
            </Menu.Dropdown>
          </Menu>

          {attributes.responsive && <Badge>Responsive</Badge>}

          <Text size="xs">
            Built by{' '}
            <Anchor
              fz="xs"
              href={`https://github.com/${attributes.author}`}
              target="_blank"
              c="dimmed"
            >
              @{attributes.author}
            </Anchor>
          </Text>
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
