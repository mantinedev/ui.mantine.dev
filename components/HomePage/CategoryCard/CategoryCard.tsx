import cx from 'clsx';
import Link from 'next/link';
import { Card, CardSection, Text, Image } from '@mantine/core';
import { Category } from '../../../data';
import classes from './CategoryCard.module.css';

export interface CategoryCardProps {
  className?: string;
  category: Category;
  count: number;
}

export function CategoryCard({ count, category, className }: CategoryCardProps) {
  return (
    <Card
      component={Link}
      href={`/category/${category.slug}`}
      className={cx(classes.card, className)}
      radius="md"
    >
      <CardSection className={classes.imageWrapper}>
        <Image
          className={classes.image}
          src={category.images.light}
          alt={category.name}
          data-light
        />
        <Image className={classes.image} src={category.images.dark} alt={category.name} data-dark />
      </CardSection>

      <Text className={classes.title}>{category.name}</Text>
      <Text className={classes.description} fz="xs">
        {count} {count === 1 ? 'component' : 'components'}
      </Text>
    </Card>
  );
}
