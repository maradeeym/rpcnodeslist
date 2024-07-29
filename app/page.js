import { Suspense } from 'react'
import Header from "@/components/Header";
import RpcList from '@/components/RpcList';
import BlockchainButtons from '@/components/BlockchainButtons';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <BlockchainButtons />
        <RpcList />
        <FAQ />
      </main>
    </>
  );
}
