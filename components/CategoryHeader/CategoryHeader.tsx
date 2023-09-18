import Link from 'next/link';
import { Title, Anchor, Center, Box } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { Category } from '../../data';
import classes from './CategoryHeader.module.css';

interface CategoryHeaderProps {
  category: Category;
}

export function CategoryHeader({ category }: CategoryHeaderProps) {
  return (
    <>
      <Anchor component={Link} href="/#main">
        <Center inline>
          <IconArrowLeft size="0.9rem" />
          <Box component="span" ml={5}>
            Back to all categories
          </Box>
        </Center>
      </Anchor>

      <Title className={classes.title}>{category.name}</Title>
    </>
  );
}
