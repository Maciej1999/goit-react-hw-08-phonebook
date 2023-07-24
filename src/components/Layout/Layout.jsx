import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Footer } from 'components/Footer/Footer';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useAuth } from 'hooks';

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      {/* <AppBar /> */}
      <div />
      {isLoggedIn ? <UserMenu /> : <Navigation />}

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
