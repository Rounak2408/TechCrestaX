import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("TechCrestaX ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '32px 20px', fontFamily: 'system-ui, sans-serif', maxWidth: 720, margin: '60px auto', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 16, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'inline-block', padding: '4px 12px', background: '#fee2e2', color: '#b91c1c', borderRadius: 9999, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>
            Application Error
          </div>
          <h1 style={{ color: '#0f172a', fontSize: 24, fontWeight: 700, marginBottom: 8 }}>
            Unable to render interface
          </h1>
          <p style={{ color: '#475569', fontSize: 14, marginBottom: 16 }}>
            {this.state.error?.message || String(this.state.error)}
          </p>
          <pre style={{ background: '#f8fafc', padding: 14, borderRadius: 8, overflowX: 'auto', fontSize: 12, border: '1px solid #cbd5e1', color: '#334155' }}>
            {this.state.errorInfo?.componentStack || this.state.error?.stack}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{ marginTop: 20, padding: '10px 20px', background: '#0f172a', color: '#ffffff', border: 'none', borderRadius: 9999, fontWeight: 600, fontSize: 13, cursor: 'pointer' }}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <ErrorBoundary>
          <BrowserRouter>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </BrowserRouter>
        </ErrorBoundary>
      </React.StrictMode>
    );
  } catch (err) {
    console.error("Failed to render React root:", err);
  }
}
