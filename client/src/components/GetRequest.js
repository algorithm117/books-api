const GetRequest = () => {
  return (
    <>
      <div className="request">
        <h2>
          <span className="type-highlight">
            GET
          </span>{' '}
          All Books
        </h2>
        <p>Returns an array of objects.</p>
        <p>
          Path:{' '}
          <span className="request-url-path">
            https://books-api-server.herokuapp.com/v1/books
          </span>
        </p>
        <h3>Query String Parameters</h3>
        <table className="get-all-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>page</td>
              <td>No</td>
              <td>
                Paginate results. Defaults to page
                1 if not specified.
              </td>
            </tr>
            <tr>
              <td>limit</td>
              <td>No</td>
              <td>
                Limit number of results per page.
                Returns all results if not
                specifed.
              </td>
            </tr>
            <tr>
              <td>api_key</td>
              <td>Yes</td>
              <td>Books API Key</td>
            </tr>
          </tbody>
        </table>

        <p>
          Example URL:
          <span className="example-url">
            https://books-api-server.herokuapp.com/v1/books?page=1&limit=5&api_key=JF.k+.IW5Ly+sYnEDhj5+e2UK8
          </span>
        </p>
      </div>

      <div className="request">
        <h2>
          <span className="type-highlight">
            GET
          </span>{' '}
          Book
        </h2>
        <p>Returns a single object.</p>
        <p>
          Path:{' '}
          <span className="request-url-path">
            https://books-api-server.herokuapp.com/v1/books/:id
          </span>
        </p>
        <h3>Query String Parameters</h3>
        <table className="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>id</td>
              <td>Yes</td>
              <td>ID of book.</td>
            </tr>
            <tr>
              <td>api_key</td>
              <td>Yes</td>
              <td>Books API Key</td>
            </tr>
          </tbody>
        </table>
        <p>
          Example URL:
          <span className="example-url">
            https://books-api-server.herokuapp.com/v1/books/45641?api_key=JF.k+.IW5Ly+sYnEDhj5+e2UK8
          </span>
        </p>
      </div>
    </>
  );
};

export default GetRequest;
