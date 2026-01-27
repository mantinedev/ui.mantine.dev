import { IconBookmarkFilled, IconHeartFilled, IconShare2 } from '@tabler/icons-react';
import { ActionIcon, Avatar, Badge, Card, Group, Image, Text } from '@mantine/core';
import classes from './ArticleCardFooter.module.css';

interface ArticleCardFooterData {
  category: string;
  image: string;
  authorName: string;
  authorAvatar: string;
  link: string;
  title: string;
  postedTime: string;
  description: string;
  footer: string;
}

const data: ArticleCardFooterData = {
  category: 'Decorations',
  image:
    'https://images.unsplash.com/photo-1483794344563-d27a8d18014e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=500',
  authorName: 'Elsa Gardenowl',
  authorAvatar:
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
  link: 'https://mantine.dev',
  title: 'Top 50 underrated plants for house decoration',
  postedTime: 'posted 34 minutes ago',
  description:
    'Discover the best-kept secrets of home decor with our curated list of 50 underrated plants that will transform your living space into a green oasis.',
  footer: '733 people liked this',
};

export function ArticleCardFooter() {
  return (
    <Card withBorder padding="lg" radius="md" className={classes.card}>
      <Card.Section mb="lg">
        <Image src={data.image} alt={data.title} height={180} />
      </Card.Section>

      <Badge color="violet" variant="outline">
        {data.category}
      </Badge>

      <Text className={classes.title}>{data.title}</Text>

      <Group mt="lg">
        <Avatar src={data.authorAvatar} radius="sm" alt={data.authorName} />

        <div>
          <Text c="bright" fw={500}>
            {data.authorName}
          </Text>
          <Text size="xs">{data.postedTime}</Text>
        </div>
      </Group>

      <Card.Section className={classes.footer}>
        <Group justify="space-between">
          <Text size="xs">{data.footer}</Text>
          <Group gap={0}>
            <ActionIcon variant="subtle" color="gray" aria-label="Like">
              <IconHeartFilled size={20} color="var(--mantine-color-red-6)" />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray" aria-label="Bookmark">
              <IconBookmarkFilled size={20} color="var(--mantine-color-yellow-7)" />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray" aria-label="Share">
              <IconShare2 size={20} color="var(--mantine-color-cyan-6)" />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
}
