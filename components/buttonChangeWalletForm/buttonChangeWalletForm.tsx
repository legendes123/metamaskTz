import React, { FC, SVGProps } from "react";
import Image from "next/image";
import { Typography, Button } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
interface IButtonChangeWalletForm {
  title: string;
  icon: string | StaticImport;
  handleChangeWallet: () => void;
  isActive: boolean;
}
const ButtonChangeWalletForm: FC<IButtonChangeWalletForm> = ({
  title,
  handleChangeWallet,
  icon,
  isActive,
}) => {
  return (
    <Button
      onClick={handleChangeWallet}
      sx={{
        borderRadius: "15%",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: isActive ? "#8c8888" : "black",
        width: "120px",
        height: "40px",
        ":hover": {
          bgcolor: "#8c8888",
        },
      }}
      variant="contained"
    >
      <Image
        style={{
          borderRadius: "50%",
        }}
        src={icon}
        alt="My SVG"
        width={30}
        height={30}
      />
      <Typography mt={1} variant="body1" gutterBottom>
        {title}
      </Typography>
    </Button>
  );
};

export default ButtonChangeWalletForm;
