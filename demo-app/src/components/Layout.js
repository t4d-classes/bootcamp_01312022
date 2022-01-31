import { Outlet, Link } from 'react-router-dom';

import './Layout.css';

export const Layout = () => {

  return (

    <div>
      <header>
        <h1>Tool Apps</h1>
      </header>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/color-tool">Color Tool</Link></li>
          <li><Link to="/car-tool">Car Tool</Link></li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>

      <aside>
        sidebar
      </aside>

      <footer>
        <small>&copy; 2022 A Cool Company, Inc.</small>
      </footer>
    </div>

  );


};