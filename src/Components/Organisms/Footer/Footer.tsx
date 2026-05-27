import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footerList">
        <li>
          <a
            href="https://www.littleheroes.jp/w/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            会社情報
          </a>
        </li>

        <li>
          <a
            href="https://www.littleheroes.jp/w"
            target="_blank"
            rel="noopener noreferrer"
          >
            LHについて
          </a>
        </li>

        <li>
          <a
            href="https://www.littleheroes.jp/w/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            利用規約
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;