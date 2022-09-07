import {
  Button,
  Container,
  createStyles,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import image from "./images/404.svg";

const useStyles = createStyles(theme => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  title: {
    fontWeight: 900,
    fontSize: 34,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  control: {
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  container404: {
    display: "flex",
    flexDirection: "row-reverse",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },
}));

export default function NotFoundImage() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
        className={classes.container404}>
        <Image src={image.src} />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text color="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            className={classes.control}>
            Get back to home page
          </Button>
        </div>
      </SimpleGrid>
    </Container>
  );
}
