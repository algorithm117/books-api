const PostRequest = () => {
  return (
    <>
      <div className="request">
        <h2>
          <span className="type-highlight">
            POST
          </span>{' '}
          Book
        </h2>
        <p>Add new book to database.</p>
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
              <td>api_key</td>
              <td>Yes</td>
              <td>Books API Key</td>
            </tr>
          </tbody>
        </table>

        <h3 className="h3-details">
          Request Body
        </h3>
        <table className="post-table">
          <thead>
            <tr>
              <th>Key</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>authors</td>
              <td>Yes</td>
              <td>
                List of authors. If more than one
                author, then separate using
                forward slash ( / ).
              </td>
            </tr>
            <tr>
              <td>average_rating</td>
              <td>Yes</td>
              <td>
                Round to two decimal places.
              </td>
            </tr>
            <tr>
              <td>isbn</td>
              <td>Yes</td>
              <td>
                Length of 10 digits with no other
                characters or separators.
              </td>
            </tr>
            <tr>
              <td>isbn13</td>
              <td>Yes</td>
              <td>
                Length of 13 digits with no other
                characters or separators.
              </td>
            </tr>
            <tr>
              <td>language_code</td>
              <td>Yes</td>
              <td>Length of 3 characters.</td>
            </tr>
            <tr>
              <td>num_pages</td>
              <td>Yes</td>
              <td>
                Number of pages in the book.
                Should be an integer.
              </td>
            </tr>
            <tr>
              <td>publication_date</td>
              <td>Yes</td>
              <td>Format is: MM/DD/YYYY.</td>
            </tr>
            <tr>
              <td>publisher</td>
              <td>Yes</td>
              <td>Publisher of the book.</td>
            </tr>
            <tr>
              <td>ratings_count</td>
              <td>Yes</td>
              <td>
                Number of ratings the book has
                received. Should be an integer
                value.
              </td>
            </tr>
            <tr>
              <td>text_reviews_count</td>
              <td>Yes</td>
              <td>
                Number of written reviews book has
                received. Should be an integer
                value.
              </td>
            </tr>
            <tr>
              <td>title</td>
              <td>Yes</td>
              <td>Name of the book.</td>
            </tr>
          </tbody>
        </table>

        <p>
          Example URL:
          <span className="example-url">
            https://books-api-server.herokuapp.com/v1/books?api_key=zISrn944Q3m2oZ9sUvhFI~NNgV
          </span>
        </p>
      </div>
    </>
  );
};

export default PostRequest;
