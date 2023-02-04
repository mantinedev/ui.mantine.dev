import Link from 'next/link';
import { Card, CardSection, Text, Image, useMantineTheme } from '@mantine/core';
import { Category } from '../../../data';
import useStyles from './CategoryCard.styles';

export interface CategoryCardProps {
  className?: string;
  category: Category;
  count: number;
}

export function CategoryCard({ count, category, className }: CategoryCardProps) {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  return (
    <Link href={`/category/${category.slug}`} passHref>
      <Card component="a" className={cx(classes.card, className)} radius="md">
        <CardSection className={classes.imageWrapper}>
          <Image
            className={classes.image}
            src={category.images[theme.colorScheme]}
            alt={category.name}
          />
        </CardSection>

        <Text className={classes.title}>{category.name}</Text>
        <Text className={classes.description} fz="xs">
          {count} {count === 1 ? 'component' : 'components'}
        </Text>
      </Card>
    </Link>
  );
}
