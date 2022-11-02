import { Link } from 'react-router-dom';
import { Layout } from '../layouts';

export const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1>HOMEPAGE</h1>
        <Link to="/play" title="Play a game">
          Play
        </Link>
      </div>
    </Layout>
  );
};
