
import { AppRouter } from './routes/index';
import { AuthProvider } from './contexts/auth';

function App() {
  return (


    <AuthProvider>
      <AppRouter>
      </AppRouter>
    </AuthProvider>


  );
}

export default App;
