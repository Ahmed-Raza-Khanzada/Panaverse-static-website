"use client";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button, HStack,
  Img,
  Icon,
  IconButton,
  createIcon,
  IconProps, chakra,
  useColorModeValue,
  background,
} from '@chakra-ui/react';

import { motion } from "framer-motion"
import '../styles/Styles.css'
export default function Middle() {
  return (

    <Box w="full"
      h="container.md"
      backgroundImage="url(/Rectangle-2.png)"
      bgPos="center"
      bgSize="cover"

      top={"0"}
      left={"0"}
      right={"0"}
      bottom={"0"}
      zIndex="-2">

      <Flex direction={['column', 'column', "row", 'row']} >



        <Box>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}> 
              {/* <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}> */}
          <Stack marginTop={"auto"} direction={["column-reverse", "column-reverse","column-reverse", "row"]}>

            <Box marginTop={["-5px","10px","0px","240px","180px"]} marginLeft={["20px","25px","32px","40px","100px"]} id="textbox">


              <Box className="herofont" fontSize={["32px", "35px", "40px", "40px", "50px"]}>
                <Text textColor={"gray.50"} >
                  Become
                </Text>

                <HStack  >
                  <Text style={{ color: "rgba(238, 25, 56, 1)" }}  >
                    Certified Web 3.0
                  </Text>
                  <Text  textColor={"gray.50"} > and</Text>
                </HStack>

                <Text style={{ color: "rgba(238, 25, 56, 1)" }}  >
                  Metaverse Developer
                </Text>
               
              </Box>

              <Box textColor={"gray.50"} fontSize={["11px", "15px","14px", "17px", "20px"]} >
              
                <Text >
                  Launch your Development Career with Web 3 and Metaverse
                  <br />
                  Getting Ready of the next Generation of the
                  <br />
                  Internet
                </Text>
             
              </Box>

              <Box marginLeft={["50px","0px","0px","0px","0px"]} marginTop={["5px","5px","10px","15px","15px"]}>

              <Button
              rounded={'full'}
              size={["sm","sm","md","md",'lg']}
              fontWeight={'normal'}
              marginRight={["5px","7px","7px"]}
              colorScheme={"rgba(238, 25, 56, 1)"}
              bg={'rgba(238, 25, 56, 1)'}
              _hover={{ bg: 'rgba(238, 25, 56, 0.4)' }}>
              Join Now
            </Button>
            <Button
              rounded={'full'}
              size={["sm","sm","md","md",'lg']}
              fontWeight={'normal'}
              _hover={{ bg: 'rgba(238, 255, 255, 0.6)' }}
              >
              Learn More
            </Button>
                </Box>


            </Box>
            <Box margin={"0px"}>
            <motion.div animate={{ y: [-10, 10], transition: { duration: 2, repeat: Infinity, repeatType: "reverse" } }}>
              <Img src={'/rocket1.png'}  marginLeft={["160px","180px","300px","-60px","-40px"]}  width={["100px","150px","150px","206px","280px"]} marginTop={["80px","55px","100px","100px","60px"]}  alt='herorocket1' />
           </motion.div>
            </Box>


          </Stack>
 
                </motion.div>
        </Box>

        <Box  >
          
          <Img src={'/11.png'} width={["350px", "300px", "400px","550px", "720px"]}   marginTop={["-10px","-70px","300px","290px","200px"]} marginLeft={["-5px","180px","-20px","-50px","-150px"]} marginRight={["10px","-10px","-10px","-25px"]}  alt='heropicture' />
        </Box>

      </Flex>

    </Box>
  );
}

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d:
    'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});