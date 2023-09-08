import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
  } from '@mantine/core';
  import { IconStar, IconFingerprint, IconMedicineSyrup, IconVaccine, IconBook, IconNurse } from '@tabler/icons-react';
  import Link from 'next/link';
  
  const mockdata = [
    {
      title: 'Medicare',
      description:
        'Get started with Medicare registration, your key to accessing essential healthcare services in Australia.',
      icon: IconStar,
    },
    {
      title: 'myGovID',
      description:
        'Securely establish your myGovID, the gateway to seamless government services and healthcare access.',
      icon: IconFingerprint,
    },
    {
      title: 'Pharmacy Linkage',
      description:
        'Connect your preferred pharmacy for hassle-free prescription refills and medication management.',
      icon: IconMedicineSyrup,
    },
    {
        title: 'Vaccination Passport',
        description:
          'Keep track of your vaccination history with ease and access this crucial health information whenever you need it.',
        icon: IconVaccine,
      },
      {
        title: 'Digital Health Literacy',
        description:
          "Enhance your digital health literacy and gain the knowledge to navigate Australia's healthcare systems confidently.",
        icon: IconBook,
      },
      {
        title: 'Emergency Medical Profile',
        description:
          'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
        icon: IconNurse,
      },
  ];
  
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: rem(34),
      fontWeight: 900,
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: rem(24),
      },
    },
  
    description: {
      maxWidth: 600,
      margin: 'auto',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  
    card: {
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    cardTitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
      },
    },
  }));
  
  export function ModuleCards() {
    const { classes, theme } = useStyles();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl" component='a' href='Medicare'>
        <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container size="lg" py="xl">
        <Group position="center">
          <Badge variant="filled" size="lg">
            All Modules
          </Badge>
          <Badge size="lg">
            Registrations
          </Badge>
          <Badge size="lg">
          General Health
          </Badge>
          <Badge size="lg">
          Mental Health
          </Badge>
          <Badge size="lg">
          Emergency Prepardness
          </Badge>
        </Group>
  
        <Title order={2} className={classes.title} ta="center" mt="sm">
            Your Path to Health and Wellness Mastery
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Browse from 100+ modules to take responsibility of your health.
        </Text>
  
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }