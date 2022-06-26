import React from 'react';
import Link from 'next/link';
import { Title, Anchor, Center, Box } from '@mantine/core';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons';
import { Category } from '../../data';
import useStyles from './CategoryHeader.styles';

interface CategoryHeaderProps {
  category: Category;
}

export function CategoryHeader({ category }: CategoryHeaderProps) {
  const { classes, theme } = useStyles();
  return (
    <>
      <Link href="/#main" passHref>
        <Anchor>
          <Center inline>
            {theme.dir === 'rtl' ? <IconArrowRight size={14} /> : <IconArrowLeft size={14} />}
            <Box component="span" ml={5}>
              Back to all categories
            </Box>
          </Center>
        </Anchor>
      </Link>

      <Title className={classes.title}>{category.name}</Title>
    </>
  );
}
