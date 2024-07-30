import { Suspense } from 'react'
import Header from "@/components/Header";
import RpcList from '@/components/RpcList';
import BlockchainButtons from '@/components/BlockchainButtons';
import FAQ from '@/components/FAQ';
import SimpleHero from '@/components/SimpleHero';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <SimpleHero />
        <BlockchainButtons />
        <RpcList />
        <FAQ />
      </main>
    </>
  );
}
