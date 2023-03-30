import {
  Grid,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { KkRestAdapter } from "@keepkey/hdwallet-keepkey-rest";
import { KeepKeySdk } from "@keepkey/keepkey-sdk";
import { SDK } from "@pioneer-sdk/sdk";
import * as core from "@shapeshiftoss/hdwallet-core";
import axios from "axios";
import Context from "lib/context";
import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  // const [query, setQuery] = useState("");
  // const [response, setResponse] = useState("");
  // const handleInputChangeQuery = (e: any) => setQuery(e.target.value);
  // const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  // const { app, api, context, username, totalValueUsd } = useContext(Context);
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const [wallet, setWallet] = useState({});
  // const [app, setApp] = useState({});

  const onStart = async function () {
    try {
      // get address
      // sign a message with the api key
      // get pairing code
      // view credits
      // sell credits
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  // onstart get data
  useEffect(() => {
    onStart();
  }, []);

  // const onSubmit = async function () {
  //   try {
  //     // eslint-disable-next-line no-console
  //     console.log("query: ", query);
  //     const bodyData = { text: query };
  //     const url = "http://127.0.0.1:4000/api/v1";
  //     let response = await axios.post(`${url}/response`, bodyData);
  //     response = response.data;
  //     // @ts-ignore
  //     setResponse(response);
  //     // eslint-disable-next-line no-console
  //     console.log("response: ", response);
  //     // eslint-disable-next-line no-console
  //     console.log("response: ", response);
  //   } catch (e) {
  //     // eslint-disable-next-line no-console
  //     console.error(e);
  //   }
  // };
  const onSubmit = async function () {
    try {
      // onClick
      window.open(
        "https://discordapp.com/oauth2/authorize?&client_id=865670112611008524&scope=bot&permission=8",
        "_blank"
      );
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };
  return (
    <Grid gap={4}>
      <Button onClick={() => onSubmit()}>Add Pioneer to your server</Button>
    </Grid>
  );
};

export default Home;
