export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          <a href="google.com">
            <span className="bat" role="img" aria-label="bat">
              🦇
            </span>
          </a>
          <a href="google.com">OpenBat</a>
        </div>
        <div className="links">
          <a href="google.com">Profiles</a>
          <a href="google.com">FAQ</a>
          <a className="signup-btn" href="google.com">
            Sign up
          </a>
        </div>
      </nav>
      <hr></hr>
    </div>
  );
}
