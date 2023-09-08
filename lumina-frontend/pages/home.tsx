import {DashboardCard} from '../components/DashboardCard'
import {BadgesCard} from '../components/Badges'
import Time from '../components/Timeline'
import { Flex, Center } from '@mantine/core';

export default function Journey() {
    return (
      <>
      <DashboardCard username={"Lisa"} />
      <Flex
      mih={50}
      gap="md"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
      columnGap={120}
      rowGap={50}
    >
      
      <Center>
      <Flex
      mih={50}
      gap="md"
      justify="flex-start"
      align="flex-start"
      direction="column"
      wrap="wrap"
    >
      <BadgesCard title={'Badges'} completed={5} total={40} stats={[{value:0,label:"Remaining"}]} />
      <BadgesCard title={'Tasks to do'} completed={9} total={90} stats={[{value:0,label:"Remaining"}]} />
    </Flex> </Center><Time /> </Flex> 
    
       
      </>
    )
}
  