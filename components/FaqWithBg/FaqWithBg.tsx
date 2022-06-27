import React from 'react';
import {
  createStyles,
  Title,
  Container,
  Accordion,
  ThemeIcon,
  MantineProvider,
} from '@mantine/core';
import { IconPlus } from '@tabler/icons';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('control');

  return {
    wrapper: {
      paddingTop: theme.spacing.xl * 2,
      minHeight: 820,
      backgroundImage: `radial-gradient(${theme.colors[theme.primaryColor][6]} 0%, ${
        theme.colors[theme.primaryColor][4]
      } 100%)`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top left',
      position: 'relative',
      color: theme.black,
    },

    title: {
      color: theme.white,
      fontSize: 52,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      marginBottom: theme.spacing.xl * 1.5,
    },

    item: {
      backgroundColor: theme.white,
      borderBottom: 0,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
      overflow: 'hidden',
    },

    control: {
      fontSize: theme.fontSizes.lg,
      padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
      color: theme.black,

      '&:hover': {
        backgroundColor: 'transparent',
      },
    },

    content: {
      paddingLeft: theme.spacing.xl,
      lineHeight: 1.6,
      color: theme.black,
    },

    icon: {
      ref: icon,
      marginLeft: theme.spacing.md,
    },

    gradient: {
      backgroundImage: `radial-gradient(${theme.colors[theme.primaryColor][6]} 0%, ${
        theme.colors[theme.primaryColor][5]
      } 100%)`,
    },

    itemOpened: {
      [`& .${icon}`]: {
        transform: 'rotate(45deg)',
      },
    },

    button: {
      display: 'block',
      marginTop: theme.spacing.md,

      '@media (max-width: 755px)': {
        display: 'block',
        width: '100%',
      },
    },
  };
});

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export function FaqWithBg() {
  const { classes } = useStyles();
  return (
    <MantineProvider inherit theme={{ colorScheme: 'light' }}>
      <div className={classes.wrapper}>
        <Container size="sm">
          <Title align="center" className={classes.title}>
            Frequently Asked Questions
          </Title>

          <Accordion
            chevronPosition="right"
            defaultValue="reset-password"
            chevronSize={50}
            variant="separated"
            disableChevronRotation
            chevron={
              <ThemeIcon radius="xl" className={classes.gradient} size={32}>
                <IconPlus size={18} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <Accordion.Item className={classes.item} value="reset-password">
              <Accordion.Control>How can I reset my password?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="another-account">
              <Accordion.Control>Can I create more that one account?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="newsletter">
              <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="credit-card">
              <Accordion.Control>Do you store credit card information securely?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="payment">
              <Accordion.Control>What payment systems to you work with?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    </MantineProvider>
  );
}
