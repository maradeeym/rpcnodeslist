import { Suspense } from 'react'
import Header from "@/components/Header";
import RpcList from '@/components/RpcList';
import BlockchainButtons from '@/components/BlockchainButtons';
import FAQ from '@/components/FAQ';
import AddToWalletButtons from '@/components/AddToWalletButtons';
import SimpleHero from '@/components/SimpleHero';
import BlockchainFilter from '@/components/BlockchainFilter';


export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <SimpleHero />
        <RpcList />
        <FAQ />
        <AddToWalletButtons />
      </main>
    </>
  );
}
