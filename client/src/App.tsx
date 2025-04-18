import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import {Toaster} from "sonner"
import '@solana/wallet-adapter-react-ui/styles.css';
import { useMediaQuery } from 'usehooks-ts';
import { Mobile } from './components/mobile';

function App() {
  const isMobleDevice = useMediaQuery('(max-width: 768px)');
  return(
        <div className='dark min-h-screen bg-background'>
          {
          isMobleDevice ? (
      <Mobile />
    ): (
      <>
          <Toaster />
          <ConnectionProvider endpoint={import.meta.env.VITE_SOLANA_RPC_URL}>
              <WalletProvider wallets={[]} autoConnect>
                  <WalletModalProvider>
                      <Navbar></Navbar>
                      <Hero></Hero>
                  </WalletModalProvider>
              </WalletProvider>
          </ConnectionProvider>
          </>
    )
  }
        </div>
    )
}

export default App
