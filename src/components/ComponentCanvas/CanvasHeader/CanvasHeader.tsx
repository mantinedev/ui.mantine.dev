import { GithubIcon } from '@mantine/ds';
import { IconExternalLink, IconComponents, IconCode, IconEye } from '@tabler/icons';
import {
  Group,
  Text,
  ActionIcon,
  Menu,
  Badge,
  SegmentedControl,
  Center,
  Anchor,
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
        <Text weight={500} style={{ marginRight: 15 }}>
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
              <IconExternalLink size={14} stroke={1.5} />
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
            <GithubIcon size={14} />
          </ActionIcon>

          <Menu withArrow position="bottom-end" transition="pop-top-right" transitionDuration={100}>
            <Menu.Target>
              <ActionIcon
                className={classes.action}
                title="Component dependencies"
                variant="default"
              >
                <IconComponents size={16} stroke={1.5} />
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
              size="xs"
              href={`https://github.com/${attributes.author}`}
              target="_blank"
              color="dimmed"
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
                  <IconEye size={16} stroke={1.5} />
                  <div className={classes.controlLabel}>Preview</div>
                </Center>
              ),
            },
            {
              value: 'code',
              label: (
                <Center>
                  <IconCode size={16} stroke={1.5} />
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
