import Link from "next/link";

const Nav = () => {
  return (
    <div className="navbar-container">
      <ul className="nav-menuitems">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <a>Shop</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>Contact</li>
      </ul>
      <style jsx>{`
        .navbar-container {
          width: 100%;
          height: 10vh;
          background-color: pink;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        .nav-menuitems {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 0;
        }
        .nav-menuitems li {
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default Nav;
