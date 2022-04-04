import Navbar from './components/Navbar';
import Detail from './components/Detail';
import GetRequest from './components/GetRequest';
import PostRequest from './components/PostRequest';
import PutRequest from './components/PutRequest';
import DeleteRequest from './components/DeleteRequest';

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Detail />
        <GetRequest />
        <PostRequest />
        <PutRequest />
        <DeleteRequest />
      </div>
    </>
  );
}

export default App;
