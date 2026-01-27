import { IconBookmarkFilled, IconHeartFilled, IconShare2 } from '@tabler/icons-react';
import { ActionIcon, Avatar, Badge, Card, Group, Image, Text } from '@mantine/core';
import classes from './ArticleCard.module.css';

interface ArticleCardData {
  image: string;
  title: string;
  description: string;
  authorName: string;
  authorAvatar: string;
  rating: string;
  link: string;
}

const data: ArticleCardData = {
  image: 'https://i.imgur.com/Cij5vdL.png',
  title: 'Resident Evil Village review',
  description:
    'Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.',
  authorName: 'Bill Wormeater',
  authorAvatar:
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
  rating: 'outstanding',
  link: 'https://mantine.dev',
};

export function ArticleCard() {
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section component="a" href={data.link} target="_blank" rel="noreferrer">
        <Image src={data.image} height={180} alt={data.title} className={classes.image} />
      </Card.Section>

      <Badge
        className={classes.rating}
        variant="gradient"
        gradient={{ from: 'indigo', to: 'violet', deg: 145 }}
      >
        {data.rating}
      </Badge>

      <Text
        className={classes.title}
        component="a"
        href={data.link}
        target="_blank"
        rel="noreferrer"
      >
        {data.title}
      </Text>

      <Text fz="sm" lineClamp={4} opacity={0.9}>
        {data.description}
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Group gap="xs">
          <Avatar src={data.authorAvatar} size={24} alt={data.authorName} />
          <Text fz="sm">{data.authorName}</Text>
        </Group>

        <Group gap={8}>
          <ActionIcon className={classes.action} aria-label="Like">
            <IconHeartFilled size={16} color="var(--mantine-color-red-6)" />
          </ActionIcon>
          <ActionIcon className={classes.action} aria-label="Bookmark">
            <IconBookmarkFilled size={16} color="var(--mantine-color-yellow-7)" />
          </ActionIcon>
          <ActionIcon className={classes.action} aria-label="Share">
            <IconShare2 size={16} color="var(--mantine-color-cyan-6)" />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}
