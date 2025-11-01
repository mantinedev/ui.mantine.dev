import { Avatar, Card, Group, Image, Text } from '@mantine/core';
import classes from './ArticleCardVertical.module.css';

interface ArticleCardVerticalData {
  category: string;
  title: string;
  authorName: string;
  authorAvatar: string;
  date: string;
  image: string;
}

const data: ArticleCardVerticalData = {
  category: 'technology',
  title: 'The best laptop for Frontend engineers in 2022',
  authorName: 'Elsa Typechecker',
  authorAvatar:
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
  date: 'Feb 6th',
  image:
    'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
};

export function ArticleCardVertical() {
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Image src={data.image} className={classes.image} alt={data.title} />

      <div className={classes.body}>
        <Text tt="uppercase" opacity={0.8} fw={700} size="xs">
          {data.category}
        </Text>
        <Text className={classes.title} mt="xs" mb="md">
          {data.title}
        </Text>
        <Group gap="xs">
          <Group gap={7}>
            <Avatar size={20} src={data.authorAvatar} alt={data.authorName} />
            <Text size="xs" c="bright">
              {data.authorName}
            </Text>
          </Group>

          <Text span size="xs" opacity={0.8}>
            •
          </Text>

          <Text size="xs" opacity={0.8}>
            {data.date}
          </Text>
        </Group>
      </div>
    </Card>
  );
}
