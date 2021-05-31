import logo from './logo.svg';
import './SearchBar.css';

function App() {
  return (
    <header id="mainHeader">
    <div class="header-heading">
        <h2> IP Address Tracker </h2>
    </div>
    <div class="header-search">
        <input type="text" id="ip-search" placeholder="Search for any IP address or domain" /><img src="images/icon-arrow.svg"  alt="" id="search-icon"/>
    </div>
    </header>
  );
}

export default App;
