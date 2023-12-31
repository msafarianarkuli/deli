import {IconCoin} from "assets/icons";
import styles from "components/appHeader/appHeader.module.scss";
import Link from "next/link";
import {useUserCoin} from "template/context/UserCoinProvider";
import usePrivateLink from "hooks/usePrivateLink";

function AppHeaderCoin() {
  const {data} = useUserCoin();
  const link = usePrivateLink({link: "/profile/wallet"});
  return (
    <Link href={link} className={styles.app_header_coin_container}>
      <IconCoin className="w-5 h-5" />
      <div className="h-5 text-[15px] font-medium mx-2">{data}</div>
      <p>سکه</p>
    </Link>
  );
}

export default AppHeaderCoin;
