import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link, Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue, useColorMode,
  Stack,
  color,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Padding } from '@syncfusion/ej2-react-charts';

const Links = ['About', "Contact Us"];
const linkss = ['https://www.youtube.com/@PIAIC', 'https://www.facebook.com/groups/798034500288384', 'https://github.com/panaverse']

const NavLink = ({ children }: { children: ReactNode }, { childrenlink }: { childrenlink: string }) => (
  <center>

    <Link
      mx={1}
      py={[1, 2, 2]}
      px={2}
      textColor={"gray.50"}
      borderRadius={100}
      _hover={{
        textDecoration: 'none',
        bg: "rgba(255, 0, 0, 0.1)",
      }}
      fontWeight={"bold"}
      href={'#'}>
      {children}
    </Link>
  </center>
);

export default function Simple() {
  const {
    isOpen: isOpenmore,
    onOpen: onOpenmore,
    onClose: onClosemore
  } = useDisclosure();
  const {
    isOpen: isOpencourses,
    onOpen: onOpencourses,
    onClose: onClosecourses
  } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    < >
      <Box px={4} backgroundColor={"rgba(255,255,255,0.2)"} padding={"2"} width="full" style={{ top: 0, position: "fixed", left: 0, zIndex: 10 }}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}  >
          <HStack spacing={8} alignItems={'center'}>
            <Flex alignItems={'center'}>
              <Box>
                <Link href="/#" style={{ paddingLeft: 0, textDecoration: 'none' }}>

                  <Image src={'/logo.png'} alt='Panaverse DAO' height="62px"  width="110px" marginLeft={"35px"} marginBottom={"1px"} display={{ base: "10", md: "50", sm: '10' }} />

                </Link>
              </Box>
            </Flex>


            <HStack
              as={'nav'}
              spacing={2}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}

              <Menu isOpen={isOpencourses}>

                <MenuButton

                  mx={1}
                  py={[1, 2, 2]}
                  px={2}
                  borderRadius={100}
                  _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}
                  aria-label="More"
                  fontWeight="normal"
                  onMouseEnter={onOpencourses}
                  onMouseLeave={onClosecourses}
                >
                  <HStack>
                    <Text  textColor={"gray.50"} fontWeight={"Bold"} >

                      Courses
                    </Text>
                    <img id="dropicon" style={{ paddingTop: 5, paddingLeft: 0, marginLeft: 5 }} height='10px' width="12px" src="dropicon3.png" />
                  </HStack>
                </MenuButton >
                <MenuList onMouseEnter={onOpencourses}  onMouseLeave={onClosecourses} box-shadow="none" border="none" backgroundColor={"rgba(255,255,255,0.5)"} >
                  <MenuItem as={Link} href={linkss[0]} _ style={{ textDecoration: 'none' }}  textColor={"gray.900"}  backgroundColor={"rgba(255,255,255,0.5)"} _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}>Web 3.0 and Metaverse</MenuItem>
                  <MenuItem as={Link} href={linkss[1]} _ style={{ textDecoration: 'none' }}  textColor={"gray.900"} backgroundColor={"rgba(255,255,255,0.5)"} _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}>Artificial Intelligence</MenuItem>

                  <MenuItem as={Link} href={linkss[2]} _ style={{ textDecoration: 'none' }}  textColor={"gray.900"} backgroundColor={"rgba(255,255,255,0.5)"} _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}>Cloud Native Computing</MenuItem>


                  <MenuItem as={Link} href={linkss[0]} _ style={{ textDecoration: 'none' }}  textColor={"gray.900"} backgroundColor={"rgba(255,255,255,0.5)"} _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}>Ambient Computing and IOT </MenuItem>
                  <MenuItem as={Link} href={linkss[1]} _ style={{ textDecoration: 'none' }}  textColor={"gray.900"} backgroundColor={"rgba(255,255,255,0.5)"} _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}>Genomics and Bioinfomatic</MenuItem>

                  <MenuItem as={Link} href={linkss[2]} _ style={{ textDecoration: 'none' }}  textColor={"gray.900"} backgroundColor={"rgba(255,255,255,0.5)"} _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}>Network Programablity and Automation</MenuItem>
                </MenuList>
              </Menu>
              <Menu isOpen={isOpenmore}>

                <MenuButton

                  mx={1}
                  py={[1, 2, 2]}
                  px={2}
                  borderRadius={100}
                  _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}
                  aria-label="More"
                  fontWeight="normal"
                  onMouseEnter={onOpenmore}
                  onMouseLeave={onClosemore}
                >
                  <HStack>
                    <Text  textColor={"gray.50"} fontWeight={"bold"} >

                      More
                    </Text>
                    <img id="dropicon" style={{ paddingTop: 5, paddingLeft: 0, marginLeft: 5 }} height='10px' width="12px" src="dropicon3.png" />
                  </HStack>
                </MenuButton >
                <MenuList onMouseEnter={onOpenmore} onMouseLeave={onClosemore} box-shadow="none" border="none" backgroundColor={"rgba(255,255,255,0.5)"} >
                  <MenuItem as={Link} href={linkss[0]} _ style={{ textDecoration: 'none' }} textColor={"gray.900"} backgroundColor={"rgba(255,255,255,0.5)"} _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}>Youtube Channel</MenuItem>
                  <MenuItem as={Link} href={linkss[1]} _ style={{ textDecoration: 'none' }} textColor={"gray.900"} backgroundColor={"rgba(255,255,255,0.5)"} _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}>Facebook Group</MenuItem>

                  <MenuItem as={Link} href={linkss[2]} _ style={{ textDecoration: 'none' }} textColor={"gray.900"} backgroundColor={"rgba(255,255,255,0.5)"} _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}>Github</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
          <HStack marginRight={"35px"}>
            <Button onClick={toggleColorMode} marginRight={"1px"} backgroundColor={"transparent"} _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}>
              {colorMode === 'light' ? <MoonIcon backgroundColor={"transparent"} /> : <SunIcon />}
            </Button>
            <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            paddingX={"34px"}
            
            // marginLeft={"100px"}
            color={'white'}
            bg={"rgba(238,25, 56, 1)"}
            href={'#'}
            _hover={{
              bg: "rgba(238, 25, 56, 0.4)",
            }}>
            Apply
          </Button>
            <IconButton
              size={'md'}

              icon={isOpenmore ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpenmore ? onClosemore : onOpenmore}
              background="transparent"
              _hover={{
                bg: "rgba(255, 0, 0, 0.1)",
              }}
            />
          </HStack>


        </Flex>


        {isOpenmore ? (
          <Box pb={4} display={{ md: 'none' }} _hover={{

            bg: "rgba(0, 0, 0, 0)",
          }}>
            <Stack as={'nav'} spacing={4} borderRadius={100}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <Menu >
                <MenuButton
                  mx={1}
                  py={1}
                  px={0}
                  borderRadius={100}
                  _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}
                  aria-label="More"
                  fontWeight="bold"
                  textColor={"gray.50"}
                >
                  Courses
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} href={linkss[0]} _ style={{ textDecoration: 'none' }} backgroundColor={"rgba(255,255,255,0.5)"} _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}>Web 3.0 and Metaverse</MenuItem>
                  <MenuItem as={Link} href={linkss[1]} _ style={{ textDecoration: 'none' }} backgroundColor={"rgba(255,255,255,0.5)"} _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}>Artificial Intelligence</MenuItem>

                  <MenuItem as={Link} href={linkss[2]} _ style={{ textDecoration: 'none' }} backgroundColor={"rgba(255,255,255,0.5)"} _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}>Cloud Native Computing</MenuItem>


                  <MenuItem as={Link} href={linkss[0]} _ style={{ textDecoration: 'none' }} backgroundColor={"rgba(255,255,255,0.5)"} _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}>Ambient Computing and IOT </MenuItem>
                  <MenuItem as={Link} href={linkss[1]} _ style={{ textDecoration: 'none' }} backgroundColor={"rgba(255,255,255,0.5)"} _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}>Genomics and Bioinfomatic</MenuItem>

                  <MenuItem as={Link} href={linkss[2]} _ style={{ textDecoration: 'none' }} backgroundColor={"rgba(255,255,255,0.5)"} _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}>Network Programablity and Automation</MenuItem>
                </MenuList>
              </Menu>
              <Menu >
                <MenuButton
                  mx={1}
                  py={1}
                  px={0}
                  borderRadius={100}
                  _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}
                  aria-label="More"
                  fontWeight="bold"
                  textColor={"gray.50"}
                >
                  More
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} href={linkss[0]} _ style={{ textDecoration: 'none' }} backgroundColor={"rgba(255,255,255,0.5)"} _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}>Youtube Channel</MenuItem>
                  <MenuItem as={Link} href={linkss[1]} _ style={{ textDecoration: 'none' }} backgroundColor={"rgba(255,255,255,0.5)"} _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}>Facebook Group</MenuItem>

                  <MenuItem as={Link} href={linkss[2]} _ style={{ textDecoration: 'none' }} backgroundColor={"rgba(255,255,255,0.5)"} _hover={{ bg: "rgba(255, 0, 0, 0.1)" }}>Github</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Box>



        ) : null}



      </Box>

    </>
  );
}