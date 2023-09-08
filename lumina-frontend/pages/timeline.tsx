import BigTimeline from '../components/BigTimeline'
import {
    createStyles,
    Title,
    rem,
  } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    title: {
      fontSize: rem(34),
      fontWeight: 900,
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: rem(24),
      },
    },
}));

export default function Timeline() {
    const { classes, theme } = useStyles();
    return (
      <>
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Your Path to Health and Wellness Mastery
        </Title>
      <BigTimeline />
       
      </>
    )
}
