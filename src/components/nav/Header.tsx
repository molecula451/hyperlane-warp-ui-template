import Image from 'next/image';
import Link from 'next/link';

import { WalletControlBar } from '../../features/wallet/WalletControlBar';
import Logo from '../../images/logos/app-logo.svg';

export function Header() {
  return (
    <header className="px-2 sm:px-6 lg:px-12 pt-10 pb-2 w-full">
      <div className="flex items-start justify-between">
        <Link href="/" className="py-2 flex items-center">
          <Image src={Logo} alt="" />
        </Link>
        <div className="flex flex-col items-end md:flex-row-reverse md:items-start gap-2 wallet-container">
          <WalletControlBar />
        </div>
      </div>
    </header>
  );
}
