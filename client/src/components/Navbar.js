import { FaGithubAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <div className="header">
        <h1>Books API v1 Documentation</h1>
        <p className="github-link">
          <FaGithubAlt className="github-icon-container" />
          <a
            href="https://github.com/algorithm117"
            className="github-anchor-tag"
          >
            algorithm117
          </a>
        </p>
      </div>
    </>
  );
};

export default Navbar;
