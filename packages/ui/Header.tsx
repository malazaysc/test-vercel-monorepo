import Link from "next/link";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link href="/web" className="header-link">
          Web
        </Link>
        <Link href="/docs" className="header-link">
          Docs
        </Link>
      </div>
    </header>
  );
};
