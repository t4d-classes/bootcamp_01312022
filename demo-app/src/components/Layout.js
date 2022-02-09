import { Outlet, Link } from 'react-router-dom';

import './Layout.css';

export const Layout = () => {

  return (

    <div className="container">
      <header id="page-header">
        <h1>Tool Apps</h1>
      </header>

      <nav id="main-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/color-tool">Color Tool</Link></li>
          <li><Link to="/car-tool-plain-sync">Car Tool Sync (Plain)</Link></li>
          <li><Link to="/car-tool-plain-async">Car Tool Async (Plain)</Link></li>
          <li><Link to="/calc-tool-plain">Calc Tool (Plain)</Link></li>
          <li><Link to="/calc-tool-toolkit">Calc Tool (Toolkit)</Link></li>
        </ul>
      </nav>

      <main id="content">
        <Outlet />
      </main>

      <aside id="sidebar">
        sidebar
      </aside>

      <footer id="page-footer">
        <small>&copy; 2022 A Cool Company, Inc.</small>
      </footer>
    </div>

  );


};