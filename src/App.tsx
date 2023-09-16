import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import CheckboxContextProvider from './components/checkbox-context/ContextProvider';
import Checkboxes from './components/Checkboxes';
import Components from './components/Components';

function App() {
  const queryClient = new QueryClient();

  return (
    <main className="container px-5 min-w-800px md:mx-auto min-h-screen">
      <QueryClientProvider client={queryClient}>
        <CheckboxContextProvider>
          <Checkboxes amount={7} />
          <Components />
        </CheckboxContextProvider>
      </QueryClientProvider>
    </main>
  );
}

export default App;
