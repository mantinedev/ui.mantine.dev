import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import { Anchor, Box, Center, Title } from '@mantine/core';
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
          <IconArrowLeft size={14} />
          <Box component="span" ml={5}>
            Back to all categories
          </Box>
        </Center>
      </Anchor>

      <Title className={classes.title}>{category.name}</Title>
    </>
  );
}
