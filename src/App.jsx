import { WalletConnect } from './components/WalletConnect';
import { MintForm } from './components/MintForm';
import { VerifyForm } from './components/VerifyForm';
import { HelpCard } from './components/HelpCard';
import { CONTRACT_ADDRESS, EXPLORER_BASE_URL } from './utils/config';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>Sonetyo</h1>
          <p className="tagline">Registra y protege tus ideas musicales on-chain</p>
        </div>
      </header>

      <main className="container main">
        <div className="info-banner" role="complementary" aria-label="Información del contrato">
          <p>
            Contrato en{' '}
            <a
              href={`${EXPLORER_BASE_URL}/address/${CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTRACT_ADDRESS.slice(0, 6)}…{CONTRACT_ADDRESS.slice(-4)}
            </a>
            {' '}(Syscoin Tanenbaum Testnet)
          </p>
        </div>

        <WalletConnect />

        <div className="actions-grid">
          <MintForm />
          <VerifyForm />
        </div>

        <HelpCard />
      </main>

      <footer className="footer">
        <div className="container">
          <p>Sonetyo — Registro y tokenización de creatividad musical</p>
          <p>
            <a href="https://faucet.syscoin.org/" target="_blank" rel="noopener noreferrer">
              Obtener tSYS del faucet
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
