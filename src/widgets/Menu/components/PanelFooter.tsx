import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import IconButton from "../../../components/Button/IconButton";
import Skeleton from "../../../components/Skeleton/Skeleton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import CakePrice from "./CakePrice";
import ThemeSwitcher from "./ThemeSwitcher";
import SocialLinks from "./SocialLinks";
import LangSelector from "./LangSelector";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  padding: 0 8px;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  tablePriceUsd, 
  legendPriceUsd, 
  squirePriceUsd,
  shillingPriceUsd,
  currentLang,
  langs,
  setLang,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <SocialEntry>        
        {cakePriceUsd ? (
          <PriceLink href="https://pancakeswap.info/token/0x929e0f859a2CA6651Db2961100f503F7b20a1A41" target="_blank">
            <img
              src="https://gateway.pinata.cloud/ipfs/QmbfV9SVSmR3kvYFAD5QjUPZ7bL5ebaRciv9hvMbm7TxVA"
              alt="Burnt Cake Logo"
              style={{
                width: "24px",
                marginRight: "8px",
              }}
            />

            <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(6)}`}</Text>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24}>
          <img
              src="https://gateway.pinata.cloud/ipfs/QmbfV9SVSmR3kvYFAD5QjUPZ7bL5ebaRciv9hvMbm7TxVA"
              alt="Burnt Cake Logo"
              style={{
                width: "24px",
                marginRight: "8px",
              }}
            />
          </Skeleton>
        )}
      </SocialEntry>
      <SettingsEntry>
        <SocialLinks />
        <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
        {/* <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} /> */}
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
