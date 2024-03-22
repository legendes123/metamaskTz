import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import ButtonChangeWalletForm from "../../components/buttonChangeWalletForm/buttonChangeWalletForm";
import svgIconEth from "@/svg/ethereum-logo-grey.svg";
import svgIcon from "@/svg/binance-coin-bnb-icon.svg";
import InfoAccountForm from "../../components/infoAccountForm/infoAccountForm";
import InputForm from "../../components/inputForm/inputForm";
import { networks, networksChainId } from "@/const/const";
import { useSDK } from "@metamask/sdk-react";
import { formatBalance } from "@/utils/utils";
import { useForm } from "@/hooks/useForm";

const Mainnet = () => {
  const form = useForm();
  const { switchToNetwork, addNetworkToMetamask } = form;
  useEffect(() => {
    switchToNetwork(networksChainId.eth);
  }, []);
  const [buttonIsActive, setButtonIsActive] = useState<boolean>(false);
  const { account, balance } = useSDK();
  const [addressTranslation, setAddressTranslation] = useState<string>("");
  const [amountTranslation, setAmountTranslation] = useState<string>("");

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ width: "270px", height: "70px" }}
      >
        <ButtonChangeWalletForm
          isActive={!buttonIsActive}
          icon={svgIconEth}
          title={"ETH"}
          handleChangeWallet={() => {
            switchToNetwork(networksChainId.eth);
          }}
        ></ButtonChangeWalletForm>
        <ButtonChangeWalletForm
          isActive={buttonIsActive}
          icon={svgIcon}
          title={"BNB"}
          handleChangeWallet={() => {
            addNetworkToMetamask("bsc");
            switchToNetwork(networksChainId.bnb);
            setButtonIsActive((prev) => !prev);
          }}
        ></ButtonChangeWalletForm>
      </Grid>
      <InfoAccountForm account={account!} balance={formatBalance(balance!)}></InfoAccountForm>
      <InputForm
        handleChangeAddressTranslation={(value: string) => {
          setAddressTranslation(value);
        }}
        handleChangeAmountTranslation={(value: string) => {
          setAmountTranslation(value);
        }}
      />
      <Button
        sx={{ width: "220px", height: "50px", backgroundColor: "#1d4dc4" }}
        variant="contained"
      >
        Send
      </Button>
    </>
  );
};

export default Mainnet;
