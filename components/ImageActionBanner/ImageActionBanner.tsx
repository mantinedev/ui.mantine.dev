import { createStyles, Card, Overlay, CardProps, Button, Text, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(240),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  content: {
    ...theme.fn.cover(),
    padding: theme.spacing.xl,
    zIndex: 1,
  },

  action: {
    position: 'absolute',
    bottom: theme.spacing.xl,
    right: theme.spacing.xl,
  },

  title: {
    color: theme.white,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
  },

  description: {
    color: theme.white,
    maxWidth: rem(220),
  },
}));

interface ImageActionBannerProps {
  title: React.ReactNode;
  description: React.ReactNode;
  image: string;
  action: {
    label: string;
    link: string;
  };
}

export function ImageActionBanner({
  title,
  description,
  image,
  action,
  style,
  className,
  ...others
}: ImageActionBannerProps & Omit<CardProps, keyof ImageActionBannerProps | 'children'>) {
  const { classes, cx, theme } = useStyles();

  return (
    <Card
      radius="md"
      style={{ backgroundImage: `url(${image})`, ...style }}
      className={cx(classes.card, className)}
      {...others}
    >
      <Overlay
        gradient={`linear-gradient(105deg, ${theme.black} 20%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`}
        opacity={0.55}
        zIndex={0}
      />

      <div className={classes.content}>
        <Text size="lg" weight={700} className={classes.title}>
          {title}
        </Text>

        <Text size="sm" className={classes.description}>
          {description}
        </Text>

        <Button
          className={classes.action}
          variant="white"
          color="dark"
          component="a"
          size="xs"
          href={action.link}
        >
          {action.label}
        </Button>
      </div>
    </Card>
  );
}
