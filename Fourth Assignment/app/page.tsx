// src/pages/index.tsx
import Head from 'next/head';
import Card from '../components/Card';

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Student Card</title>
                <meta name="description" content="Student information card" />
            </Head>
            <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Card name="Faizan" rollNo="47540" classTime="Monday 2-5" />
                <Card name="Daim" rollNo="42550" classTime="Monday 2-5" />
                <Card name="Aisha" rollNo="32570" classTime="Monday 2-5" />
            </main>
        </div>
    );
};

export default Home;
