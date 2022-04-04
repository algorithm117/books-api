const PutRequest = () => {
  return (
    <>
      <div className="request">
        <h2>
          <span className="type-highlight">
            PUT
          </span>{' '}
          Book
        </h2>
        <p>Update book with specified id.</p>
        <p>
          Path:{' '}
          <span className="request-url-path">
            https://books-api-server.herokuapp.com/v1/books
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
            https://books-api-server.herokuapp.com/v1/books?id=45642&api_key=zISrn944Q3m2oZ9sUvhFI~NNgV
          </span>
        </p>
      </div>
    </>
  );
};

export default PutRequest;
