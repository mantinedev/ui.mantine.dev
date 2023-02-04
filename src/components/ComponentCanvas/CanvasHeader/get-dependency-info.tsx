import { upperFirst } from '@mantine/hooks';
import { IconExternalLink } from '@tabler/icons-react';
import { MantineLogo, NpmIcon } from '@mantine/ds';

export function getDependencyInfo(url: string) {
  if (url.startsWith('/core') || url.startsWith('/hooks') || url.startsWith('/others')) {
    const _name = url.split('/')[2];
    const name = url.startsWith('/hooks') ? _name : _name.split('-').map(upperFirst).join('');

    return {
      name,
      url: `https://mantine.dev${url}`,
      icon: <MantineLogo color="blue" size="1rem" type="mark" />,
    };
  }

  if (url.startsWith('/component')) {
    return {
      name: url.split('/')[2].split('-').map(upperFirst).join(''),
      url,
      icon: <MantineLogo color="cyan" size="1rem" type="mark" />,
    };
  }

  if (url.startsWith('https://')) {
    const _name = url.replace('https://', '').replace('www.', '');
    const name = _name.endsWith('/') ? _name.slice(0, -1) : _name;
    return {
      name,
      url,
      icon: <IconExternalLink size="0.9rem" stroke={1.5} />,
    };
  }

  return {
    name: url,
    url: `https://www.npmjs.com/package/${url}`,
    icon: <NpmIcon size="1rem" />,
  };
}
