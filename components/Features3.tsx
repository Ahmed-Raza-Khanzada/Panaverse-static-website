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
  background, useColorMode,Circle, Center, VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

import { motion } from "framer-motion"
import '../styles/Styles.css'



export default function Features() {
  const bg = useColorModeValue('purple.500', 'rgba(9, 18, 29, 1)')
  const [imageHeight, setImageHeight] = useState(0);
  // const bg = useColorModeValue('red.500', 'red.200')
  const points = [
    { x: 0, y: 50 },
    { x: 50, y: 0 },
    { x: 100, y: 50 },
    { x: 150, y: 100 },
    { x: 200, y: 50 },
    { x: 250, y: 0 },
    { x: 300, y: 50 },
    { x: 350, y: 100 },
    { x: 400, y: 50 },
  ];
  const path = `M${points[0].x},${points[0].y} C${points[1].x},${points[1].y} ${points[2].x},${points[2].y} ${points[3].x},${points[3].y} S${points[4].x},${points[4].y} ${points[5].x},${points[5].y} C${points[6].x},${points[6].y} ${points[7].x},${points[7].y} ${points[8].x},${points[8].y}`;
  return (
    <Box className='featuremain' backgroundColor={bg}   h={ ["2920","2920","1400","1000","1000px"]} >
    <Container maxW = "1400px">
    <Box width="400px" height="100px">
      <svg width="100%" height="100%">
        <path d={path} fill="transparent" stroke="Red" strokeWidth="5" />
      </svg>
    </Box>
    </Container>
  </Box>
  );
}

