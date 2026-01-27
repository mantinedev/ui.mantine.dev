import { Button, Paper, Text, Title } from '@mantine/core';
import classes from './ArticleCardImage.module.css';

interface ArticleCardImageData {
  category: string;
  title: string;
  link: string;
  label: string;
  image: string;
}

const data: ArticleCardImageData = {
  category: 'nature',
  title: 'Best forests to visit in North America',
  link: 'https://mantine.dev',
  label: 'Read article',
  image:
    'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
};

export function ArticleCardImage() {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      className={classes.card}
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div>
        <Text className={classes.category} size="xs">
          {data.category}
        </Text>
        <Title order={3} className={classes.title}>
          {data.title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        {data.label}
      </Button>
    </Paper>
  );
}
