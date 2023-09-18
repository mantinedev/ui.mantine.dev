import { rem } from '@mantine/core';
import { Spotlight, createSpotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';
import { useRouter } from 'next/router';

export const [searchStore, searchHandlers] = createSpotlight();

export function Search({ data }: { data: any[] }) {
  const router = useRouter();

  const actions = data?.map((item) => ({
    id: item.component,
    label: item.component,
    description: item.attributes.title,
    onClick: () => router.push(`/component/${item.slug}`),
  }));

  return (
    <Spotlight
      store={searchStore}
      shortcut={['mod + K', 'mod + P', '/']}
      actions={actions || []}
      tagsToIgnore={[]}
      highlightQuery
      clearQueryOnClose
      radius="md"
      limit={7}
      nothingFound="Nothing found..."
      searchProps={{
        leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} />,
        placeholder: 'Search components...',
      }}
    />
  );
}
