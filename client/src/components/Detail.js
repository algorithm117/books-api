import { useState } from 'react';

const Detail = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      email.length === 0 ||
      !email.includes('@')
    ) {
      return;
    }

    const getApiKeyRequestUrl = `https://books-api-server.herokuapp.com/v1/apikey?email=${email}`;

    setEmail('');

    try {
      await fetch(getApiKeyRequestUrl);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <h3 className="h3-details">
          <strong>Important Details</strong>
        </h3>
        <ul>
          <li>
            <span className="background-highlight">
              GET
            </span>
            ,{' '}
            <span className="background-highlight">
              POST
            </span>
            ,{' '}
            <span className="background-highlight">
              PUT
            </span>
            , &{' '}
            <span className="background-highlight">
              DELETE
            </span>{' '}
            operations are supported
          </li>
          <li>
            Supports maximum of 100 requests per
            10 minutes
          </li>
          <li>
            Must include API key in query string
          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <h4 className="request-api-key">
          Request API Key
        </h4>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <button
          type="submit"
          className="btn-submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Detail;
