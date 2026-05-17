// Main App shell
const { useState: useStateApp, useEffect: useEffectApp } = React;

function App() {
  // Restore from localStorage
  const readStored = () => {
    try {
      const s = localStorage.getItem('md_page');
      return s || 'home';
    } catch { return 'home'; }
  };

  const [page, setPage] = useStateApp(readStored());

  // Apply editorial theme on mount (only theme)
  useEffectApp(() => {
    applyTheme('editorial');
  }, []);

  // Persist page and scroll to top on change
  useEffectApp(() => {
    try { localStorage.setItem('md_page', page); } catch {}
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [page]);

  const navigate = (p) => setPage(p);

  let PageComp;
  switch (page) {
    case 'over': PageComp = <OverPage onNav={navigate}/>; break;
    case 'aanbod': PageComp = <AanbodPage onNav={navigate}/>; break;
    case 'aanbod-nei': PageComp = <AanbodPage onNav={navigate} focusMethode="nei"/>; break;
    case 'aanbod-reflex': PageComp = <AanbodPage onNav={navigate} focusMethode="reflex"/>; break;
    case 'aanbod-systemisch': PageComp = <AanbodPage onNav={navigate} focusMethode="systemisch"/>; break;
    case 'voorwie': PageComp = <VoorwiePage onNav={navigate} variant="kind"/>; break;
    case 'voorwie-ondernemers': PageComp = <VoorwiePage onNav={navigate} variant="ondernemers"/>; break;
    case 'voorwie-trainingen': PageComp = <VoorwiePage onNav={navigate} variant="trainingen"/>; break;
    case 'tarieven': PageComp = <TarievenPage onNav={navigate}/>; break;
    case 'blog': PageComp = <BlogPage onNav={navigate}/>; break;
    case 'faq': PageComp = <FaqPage onNav={navigate}/>; break;
    case 'contact': PageComp = <ContactPage onNav={navigate}/>; break;
    case 'home':
    default: PageComp = <HomePage onNav={navigate}/>;
  }

  return (
    <div data-screen-label={`${page}`} key={page}>
      <Nav current={page} onNav={navigate} />
      {PageComp}
      <Footer onNav={navigate} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
