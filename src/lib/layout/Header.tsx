import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  Image,
  MenuButton,
  MenuDivider,
  Icon,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { KeepKeyIcon } from "lib/assets/Icons/KeepKeyIcon";
import { KeplrIcon } from "lib/assets/Icons/KeplrIcon";
import { MetaMaskIcon } from "lib/assets/Icons/MetaMaskIcon";
import { TallyHoIcon } from "lib/assets/Icons/TallyHoIcon";
import { XDEFIIcon } from "lib/assets/Icons/XDEFIIcon";

// import type { ReactNode } from "react";
// import { KeepKeySdk } from "@keepkey/keepkey-sdk";

import KEEPKEY_ICON from "lib/assets/png/keepkey.png";
import METAMASK_ICON from "lib/assets/png/metamask.png";
import PIONEER_ICON from "lib/assets/png/pioneer.png";
// import Context from "lib/context";
import { usePioneer } from "lib/context/Pioneer";

// const Pioneer = new PioneerService();

const Header = () => {
  const { state } = usePioneer();
  const { api, user, context } = state;

  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [pioneerConnected, setPioneerConnected] = useState(false);

  // const [user, setUser] = useState({
  //   username: undefined,
  //   context: undefined,
  //   totalValueUsd: undefined,
  // });

  const [walletDescriptions, setWalletDescriptions] = useState([]);
  const [walletsAvailable, setWalletsAvailable] = useState([]);
  const [balances, setBalances] = useState([]);
  const [metamaskPaired, setMetamaskPaired] = useState(false);
  const [keepkeyPaired, setKeepkeyPaired] = useState(false);
  const [nativePaired, setNativePaired] = useState(false);
  const [assetContext, setAssetContext] = useState("");
  const [assetContextImage, setAssetContextImage] = useState("");
  const [blockchainContext, setBlockchainContext] = useState("");
  const [blockchainContextImage, setBlockchainContextImage] = useState("");
  // const [pubkeys, setPubkeys] = useState([]);
  // const [walletDescriptions, setWalletDescriptions] = useState([]);
  // const [features, setKeepKeyFeatures] = useState({});

  const navigate = useNavigate();
  const handleToHome = () => navigate("/");
  const handleToDashboard = () => navigate("/dashboard");

  const setContextWallet = async function (wallet: string) {
    try {
      // eslint-disable-next-line no-console
      console.log("setContextWallet: ", wallet);
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-console
      console.error("header e: ", e);
      // setKeepKeyError("Bridge is offline!");
    }
  };

  const setContextBlockchain = async function (blockchain: string) {
    try {
      // eslint-disable-next-line no-console
      console.log("setContextBlockchain: ", blockchain);
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-console
      console.error("header e: ", e);
      // setKeepKeyError("Bridge is offline!");
    }
  };

  const setContextAsset = async function (asset: string) {
    try {
      // eslint-disable-next-line no-console
      console.log("setContextAsset: ", asset);
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-console
      console.error("header e: ", e);
      // setKeepKeyError("Bridge is offline!");
    }
  };

  const onStart = async function () {
    try {
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-console
      console.error("header e: ", e);
      // setKeepKeyError("Bridge is offline!");
    }
  };

  // // onStart()
  // useEffect(() => {
  //   setAssetContext(user.assetContext);
  //   // get images
  //   // eslint-disable-next-line no-console
  //   console.log("setAssetContext: USER: ", user);
  // }, [user, user?.assetContext]); // once on startup

  // onStart()
  useEffect(() => {
    onStart();
  }, [state, state.api]); // once on startup

  const setUser = async function () {
    try {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { wallets, walletDescriptions, balances, pubkeys } = user;
      // eslint-disable-next-line no-console
      console.log("wallets: ", wallets);

      // const walletsAvailable = [
      //   { name: "keepkey", icon: KeepKeyIcon, paired: false },
      //   { name: "metamask", icon: MetaMaskIcon, paired: false },
      //   { name: "tallyho", icon: TallyHoIcon, paired: false },
      //   { name: "xdefi", icon: XDEFIIcon, paired: false },
      //   { name: "keplr", icon: KeplrIcon, paired: false },
      // ];
      //
      // for (let i = 0; i < walletsAvailable.length; i++) {
      //   const wallet = walletsAvailable[i];
      //   // if found, mark it as paired
      //   const match = walletDescriptions.filter(
      //     (e: any) => e.type === wallet.name
      //   );
      //   if (match.length >= 0) {
      //     walletsAvailable[i].paired = true;
      //   }
      // }

      for (let i = 0; i < walletDescriptions.length; i++) {
        const wallet = walletDescriptions[i];
        if (wallet.type === "keepkey") {
          wallet.icon = KeepKeyIcon;
        }
        if (wallet.type === "metamask") {
          setMetamaskPaired(true);
        }
        if (wallet.type === "keepkey") {
          setKeepkeyPaired(true);
        }
        if (wallet.type === "native") {
          setNativePaired(true);
        }
        // TODO is it connected currently?
        wallet.paired = true;
        walletDescriptions[i] = wallet;
      }
      // eslint-disable-next-line no-console
      console.log("walletDescriptions: ", walletDescriptions);
      // setWalletsAvailable(walletsAvailable);
      setWalletDescriptions(walletDescriptions);
      setBalances(balances);
      // eslint-disable-next-line no-console
      console.log("walletsAvailable: ", walletsAvailable);

      // eslint-disable-next-line no-console
      console.log("balances: ", balances);

      // eslint-disable-next-line no-console
      console.log("pubkeys: ", pubkeys);
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-console
      console.error("header e: ", e);
      // setKeepKeyError("Bridge is offline!");
    }
  };

  // onStart()
  useEffect(() => {
    setUser();
  }, [user]); // once on startup

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <Flex
      as="header"
      width="full"
      alignSelf="flex-start"
      gridGap={2}
      alignItems="center"
    >
      <Modal isOpenBlockchain={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Blockchain Select</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* {balances.map((balance) => ( */}
            {/*    <Card> */}
            {/*      <Avatar src={balance.image} /> */}
            {/*      <CardBody> */}
            {/*        <Heading size="md">{balance.blockchain}</Heading> */}
            {/*        <Text py="2"> */}
            {/*          {balance.amount} {balance.symbol} */}
            {/*        </Text> */}
            {/*      </CardBody> */}
            {/*      <CardFooter> */}
            {/*        <Button variant="solid" colorScheme="blue"> */}
            {/*          select */}
            {/*        </Button> */}
            {/*      </CardFooter> */}
            {/*    </Card> */}
            {/* ))} */}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button onClick={() => onSubmitSelect} variant="green"> */}
            {/*  Select Coin */}
            {/* </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <IconButton
        size="md"
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label="Open Menu"
        display={{ md: "none" }}
        onClick={isOpen ? onClose : onOpen}
      />
      <HStack spacing={8}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link onClick={handleToHome}>
          <Box>CoinMaster's Guild</Box>
        </Link>
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link onClick={handleToDashboard}>
            <Text color="gray.500" fontSize="sm">
              Dashboard
            </Text>
          </Link>
        </HStack>
      </HStack>
      <Spacer />
      <Menu>
        {/*<Avatar size="lg" src={PIONEER_ICON}>*/}
        {/*  {user?.assetContext}*/}
        {/*</Avatar>*/}
        {/*<MenuButton>a: {user?.assetContext}</MenuButton>*/}
        {/*<MenuButton>b: {user?.blockchainContext}</MenuButton>*/}
        <MenuButton
          as={Button}
          rounded="full"
          variant="link"
          cursor="pointer"
          minW={200}
        >
          <Avatar size="lg" src={PIONEER_ICON}>
            {api ? (
              <div>
                {!metamaskPaired && !keepkeyPaired && !nativePaired ? (
                  <div>
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                  </div>
                ) : (
                  <div />
                )}
                {metamaskPaired ? (
                  <div>
                    <AvatarBadge boxSize="1.25em" bg="green.500">
                      <Image rounded="full" src={METAMASK_ICON} />
                    </AvatarBadge>
                  </div>
                ) : (
                  <div />
                )}
              </div>
            ) : (
              <AvatarBadge boxSize="1.25em" bg="red.500" />
            )}
          </Avatar>
        </MenuButton>
        <MenuList>
          {/* <MenuItem>{state.username}</MenuItem> */}
          {/* <MenuDivider /> */}
          <MenuItem>
            <SimpleGrid columns={3} rows={1}>
              <Card align="center" onClick={() => setContextWallet("native")}>
                <CardBody>
                  <Avatar src={PIONEER_ICON}>
                    {nativePaired ? (
                      <div>
                        <AvatarBadge boxSize="1.25em" bg="green.500" />
                      </div>
                    ) : (
                      <div>
                        <AvatarBadge boxSize="1.25em" bg="red.500" />
                      </div>
                    )}
                  </Avatar>
                </CardBody>
                <small>Pioneer</small>
              </Card>
              <Card align="center" onClick={() => setContextWallet("metamask")}>
                <CardBody>
                  <Avatar src={METAMASK_ICON}>
                    {metamaskPaired ? (
                      <div>
                        <AvatarBadge boxSize="1.25em" bg="green.500" />
                      </div>
                    ) : (
                      <div>
                        <AvatarBadge boxSize="1.25em" bg="red.500" />
                      </div>
                    )}
                  </Avatar>
                </CardBody>
                <small>MetaMask</small>
              </Card>
              <Card align="center" onClick={() => setContextWallet("keepkey")}>
                <CardBody>
                  <Avatar src={KEEPKEY_ICON}>
                    {keepkeyPaired ? (
                      <div>
                        <AvatarBadge boxSize="1.25em" bg="green.500" />
                      </div>
                    ) : (
                      <div>
                        <AvatarBadge boxSize="1.25em" bg="red.500" />
                      </div>
                    )}
                  </Avatar>
                </CardBody>
                <small>KeepKey</small>
              </Card>
            </SimpleGrid>
          </MenuItem>
          <MenuDivider />
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Balances {balances.length}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {balances.map((balance: any) => (
                  <div>
                    <Avatar size="sm" src={balance.image} />
                    <small>symbol: {balance.symbol}</small>
                    <small>balance: {balance.balance}</small>
                  </div>
                ))}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {/* <MenuItem>context: {user.context || "not Paired"}</MenuItem> */}
          {/* <MenuDivider /> */}
          {/* <MenuItem>Total Value(usd): {user.totalValueUsd}</MenuItem> */}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;
