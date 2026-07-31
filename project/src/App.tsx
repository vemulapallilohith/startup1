import { AuthProvider } from '@/lib/auth';
import { useRoute, registerRoute } from '@/lib/router';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { FeaturesPage } from '@/pages/FeaturesPage';
import { PricingPage } from '@/pages/PricingPage';
import { ContactPage } from '@/pages/ContactPage';
import { LoginPage } from '@/pages/LoginPage';
import { RegisterPage } from '@/pages/RegisterPage';
import { ForgotPasswordPage } from '@/pages/ForgotPasswordPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { SettingsPage } from '@/pages/SettingsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProtectedRoute } from '@/components/ProtectedRoute';

registerRoute('/', () => <HomePage />);
registerRoute('/about', () => <AboutPage />);
registerRoute('/features', () => <FeaturesPage />);
registerRoute('/pricing', () => <PricingPage />);
registerRoute('/contact', () => <ContactPage />);
registerRoute('/login', () => <LoginPage />);
registerRoute('/register', () => <RegisterPage />);
registerRoute('/forgot-password', () => <ForgotPasswordPage />);
registerRoute('/dashboard', () => (
  <ProtectedRoute>
    <DashboardPage />
  </ProtectedRoute>
));
registerRoute('/profile', () => (
  <ProtectedRoute>
    <ProfilePage />
  </ProtectedRoute>
));
registerRoute('/settings', () => (
  <ProtectedRoute>
    <SettingsPage />
  </ProtectedRoute>
));
registerRoute('/not-found', () => <NotFoundPage />);

function RouterView() {
  const { path, element } = useRoute();

  if (!element) {
    return <NotFoundPage />;
  }

  return <>{element}</>;
}

function App() {
  return (
    <AuthProvider>
      <RouterView />
    </AuthProvider>
  );
}

export default App;
