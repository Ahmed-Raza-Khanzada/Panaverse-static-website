"use client";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon, Img,
  IconButton,
  createIcon,
  IconProps, chakra,
  useColorModeValue,
  background, useColorMode, SimpleGrid, Center, Card, CardFooter, CardBody, CardHeader,
} from '@chakra-ui/react';
import { useState } from 'react';


import { motion } from "framer-motion"
import '../styles/Styles.css'


function MyCard({t1,img1 ,l1}) {
  return (
      <Center>

      <Card width = "100%" shadow={"full"} border = "2px" borderColor={"rgba(238, 25, 56, 1)"} h={["280px","250px","300px"]} w ={["250px","220px","250px"]} mt = {["-15px","20px","50x","50px","50px"]}  backgroundColor={"#191A1B"}   rounded="3xl" className="featurestylecopy" justifyContent={"center"}>
        <CardHeader>
          <Heading textColor={"whiteAlpha.800"} textAlign=  "center" size='md'> {t1}</Heading>
        </CardHeader>
        <CardBody>
          <Center>

          <Img src={img1} position="relative" top={["10%"]}   />
          </Center>
        </CardBody>
      </Card>
      </Center>
    )
}

const services = [
  {
  id: 0,
    text1: "Product Owner",
    l1: "12%",  
    img1: "/productowner.png"
},
{ id: 1,
  text1: "Freelance",
  l1: "2%",  
  img1: '/freelancing.png'
},
{ id: 2,
  text1: "Access to Global Market by Dao",
  l1: "12%",  
  img1: '/globalmarket.png'
},
{ id: 3,
  text1: "Boost Economy",
  l1: "2%",  
  img1: '/economyboost.png'
}
]


export default function Features() {
  const bg = useColorModeValue("purple.500", 'rgba(9, 18, 29, 1)')

  const [imageHeight, setImageHeight] = useState(0);
  // const bg = useColorModeValue('red.500', 'red.200')

  return (

    <Box className='featuremain2' backgroundColor={bg}   h={["2550px", "2050px","1600px", "1350px", "1350px"]} >
      <Container maxW={"1400"} >
        <Flex direction={["column", "column", "row", "row", "row"]}>
          <Box marginTop={"100px"} maxH={["400", "380", "auto", "auto", "auto"]} paddingBottom={["190", "100", "50", "50", "0"]} flexBasis={"60%"} backgroundColor={"#191A1B"} className="featurestylecopy">


            <Heading paddingTop={[0, 1, 1, 2, 7]} className='textfeature' marginTop={["47px", "53px", "55px", "50px", "57px"]} textColor={"rgba(238, 25, 56, 1)"} fontSize={["23px", "32px", "30px", "35px", "44px", "48px"]}>
              The Program in a Nutshell
            </Heading>


            <Heading className='textfeature2' textColor={"rgba(238, 25, 56, 1)"} fontSize={["20", "27", "27px", "25px", "28px", "33px"]}>
              Earn while you learn
            </Heading>


            <Text className='textfeature3' textColor={"whiteAlpha.800"} fontSize={["18", "22px", "17px", "20px", "20px", "24px"]} marginX={["7px", "5px", "50px"]}>
              In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.
            </Text>


          </Box>
          <Box flexBasis="45%" position="relative" top={["50px", "70px", "200px", "200px"]}>
            <Img src={'/featurewithoutwallet.png'} />
            <motion.div animate={{ y: [`calc(2vh - ${0.5 * imageHeight}px)`, `calc(4vh - ${2 * imageHeight}px)`], transition: { duration: 2, repeat: Infinity, repeatType: "reverse" } }}>
              <Img src={'/wallet.png'} position="absolute" top="0%" left="50%" transform="translate(-100%, -625%)" w="20%" onLoad={e => setImageHeight(e.target.clientHeight)} />
            </motion.div>
          </Box>
        </Flex>

        <Box>
          <Img src={'/spaceship.png'} width={["90px", "140px", "130px", "160px", "180px"]} marginTop={["100px"]} />

        </Box>
        <Box>
          <Text textColor={"rgba(238, 25, 56, 1)"} marginTop={"-30px"} fontWeight="bold" fontSize={["22px", "27px", "27px", "27px", "31px"]} className="textfeature">
            Why to Join
          </Text>
          <Text className='textfeature4'  marginX={["30px", "30px", "100px", "250px", "350px"]} fontWeight={"bold"} fontSize={["17px", "22px", "22px", "22px", "22px", "24px"]}>
            In this brand-new type of curriculum, students will learn how to make money and
            boost exports  in the classroom and will begin doing so within six months of the program's beginning.
            It  resembles a cross between a corporate venture and an educational project.
          </Text>
        </Box>
        <Center>

        <SimpleGrid spacing={"50px"} mt = {["50px","20px","10px"]}  justifyContent="center"  columns = {[1,2,2,4,4,4]} maxWidth = "1100px">
          {services.map((ele)=>(
            
            
            
            <MyCard t1 = {ele.text1} img1 = {ele.img1} l1={ele.l1} key={ele.id}/>  
            
            )
            )}
        </SimpleGrid>
            </Center>

      </Container>
    </Box>

  );
}

