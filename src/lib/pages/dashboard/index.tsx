import { Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import {usePioneer} from "../../context/Pioneer";

const Dashboard = () => {
  const { state } = usePioneer();
  const { api, user, context } = state;
  const onStart = async function () {
    try {
      // eslint-disable-next-line no-console
      console.log("onStart())");
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  // onstart get data
  useEffect(() => {
    onStart();
  }, []);

  return <Grid gap={4}>
    <div>
      <h2>dashboard</h2>
      <small>username: {user?.username}</small>
      <br/>
      <small>pairing Code: {user?.code}</small>
      <br/>
      <small>discord: {user?.discordId}</small>
    </div>
  </Grid>;
};

export default Dashboard;
