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
  IconProps, chakra,Avatar,SimpleGrid,
  useColorModeValue,Card,CardFooter,CardBody,CardHeader,
  background, useColorMode, Center,
} from '@chakra-ui/react';
import { useState } from 'react';

import { motion } from "framer-motion"
import '../styles/Styles.css'
function MyCard({t1,des }) {
  return (
    
    <Center>
      <Card width = "100%"  transition="all 0.2s ease-in-out"
      _hover={{
        transform: "scale(1.04)",
        bgGradient: "linear(to-b,rgba(238, 25, 56, 0.1), rgba(238, 25, 56, 0.18)  )",
        textColor : "black"
      }} shadow={"full"} border = "2px" borderColor={"rgba(238, 25, 56, 1)"} h={["450px","370px","370px"]} w ={["450px","500px","600px"]} mt = {["-15px","20px","50x","50px","50px"]}  backgroundColor={"#191A1B"}   rounded="3xl" className="featurestylecopy" justifyContent={"center"}>
        <CardHeader>
          <Heading textColor={"whiteAlpha.800"} textColor={"rgba(238, 25, 56, 1)"} textAlign=  "center" size='md'> {t1}</Heading>
        </CardHeader>
        <CardBody>
          <Center>

          <Text textColor="white">
            {des}
          </Text>
          </Center>
        </CardBody>
        <CardFooter>
        <Flex justifyContent="center" justifyItems={"center"}>
          <Center >
          <Button
              rounded={'full'}
              size={["sm","md","md","md",'lg']}
              fontWeight={'normal'}
              mx= {["90px","160px","110px","90px","90px"]}
              colorScheme={"rgba(238, 25, 56, 1)"}
              bg={'rgba(238, 25, 56, 1)'}
              _hover={{ bg: 'rgba(238, 25, 56, 0.4)' }}>
              View Here
            </Button>
          </Center>
          </Flex>
       </CardFooter>
      </Card>
      </Center>
    )
}

const courses = [
  {
  id: 0,
    text1: "Web 3.0 and Metaverse",
    des: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",  
    img1: "/productowner.png"
},
{ id: 1,
  text1: "Artificial Intelligence",
  des: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",  
  img1: '/freelancing.png'
},
{ id: 2,
  text1: "Cloud Computing",
  des: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",  
  img1: '/globalmarket.png'
},
{ id: 3,
  text1: "Ambient Computing and Iot",
  des: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",  
  img1: '/economyboost.png'
},
{ id: 4,
  text1: "Genomics and Bioinfomatics",
  des: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data.",  
  img1: '/economyboost.png'
},
{ id: 5,
  text1: "Network Programability and Automation",
  des: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. ",  
  img1: '/economyboost.png'
}
]
export default function Features() {
  const bg = useColorModeValue('purple.600', 'rgba(9, 18, 29, 1)')
  const [imageHeight, setImageHeight] = useState(0);
  // const bg = useColorModeValue('red.500', 'red.200')

  return (
    <Box className='featuremain2' backgroundColor={bg}   h={ ["3000","2600","1380","970","970px"]} >
    <Container maxW = "1400px">

      <Center>

 
          <Box>
            <Center>

          <Text textColor={"rgba(238, 25, 56, 1)"}   marginTop = "50px" fontWeight="bold" fontSize={["22px", "27px", "29px", "34px", "35px"]} justifyContent="center">
           Courses We Are Offering
          </Text>
            </Center>
          <SimpleGrid spacingX={["30px","10px","12px"]} spacingY = {["40px","10px","-500px"]} mt = {["40px","10px","0px","0px","-20px"]}  justifyContent="center"  columns = {[1,1,2,3,3]} maxWidth = "1100px">
            {courses.map((ele)=>(
              
              
              
              <MyCard t1 = {ele.text1} des= {ele.des} key={ele.id}/>  
              
              )
              )}
        </SimpleGrid>
            </Box>
      </Center>

    </Container>
  </Box>
  );
}

