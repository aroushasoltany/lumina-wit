import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import { text } from 'node:stream/consumers';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: theme.colors.violet[5],
  },

  carousel: {
    marginLeft: rem(200),
    marginRight: rem(200),
    marginTop: rem(200)
  },


  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  title: string;
  category: string;
  text_content: string;
  btnLink: string;
}

function Card({ title, category, text_content, btnLink }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="xl"
      p="xl"
      radius="md"
      className={classes.card}
      
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <Text>
          {text_content}
        </Text>
      </div>
      <Button variant="white" color="dark" component='a' href={btnLink}>
        Read more
      </Button>
    </Paper>
  );
}

const data = [
  {
    image: ' ',
    title: 'Who can enrol?',
    category: 'Enrolling in Medicare',
    text_content:"You can enrol in Medicare if you live in Australia and you’re any of these:",
    btnLink:"https://www.servicesaustralia.gov.au/enrolling-medicare?context=60092#whocan"
  },
  {
    title: 'What do you need to enrol...',
    category: 'Enrolling in Medicare',
    text_content:"You need to give us different documents depending on your circumstances. Read about the documents you need if:",
    btnLink:"https://www.servicesaustralia.gov.au/enrolling-medicare?context=60092#a2"
  },
  {
    title: 'How to enrol?',
    category: 'Enrolling in Medicare',
    text_content:"Enrol in Medicare by following these steps:",
    btnLink:"https://www.servicesaustralia.gov.au/enrolling-medicare?context=60092#howtoenrol"
  },
  {
    title: 'When you will get a medicare card?',
    category: 'Enrolling in Medicare',
    text_content:"You’ll get a Medicare card number after you enrol in Medicare.",
    btnLink:"https://www.servicesaustralia.gov.au/enrolling-medicare?context=60092#a4"

  },
];

export default function Module() {
const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="100%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(1) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 1}
      className={classes.carousel}
    >
      {slides}
    </Carousel>
  );
}