import React from 'react';
import Link from 'next/link';
import { LogoImage } from './LogoImage';
import useStyles from './Logo.styles';

export function Logo({ className, ...others }: any) {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Link href="/" {...others}>
        <a href="/" className={cx(classes.logo, className)} aria-label="Mantine">
          <LogoImage className={classes.image} />
        </a>
      </Link>
    </div>
  );
}
