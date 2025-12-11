import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import RankTable from './components/RankTable';
import Info from './components/info';

function App() {
  const [count, setCount] = useState(0);

  const rankingData = [
    { name: 'Alice', score: 100 },
    { name: 'Bob', score: 90 },
    { name: 'Charlie', score: 80 },
  ];

  return (
    <>
      <Title title="Ranking Page">
        <p>Check out the top scores!</p>
      </Title>
      <RankTable data={rankingData}>
        <p>Updated daily.</p>
      </RankTable>
      <Info info="This is a sample ranking page.">
        <p>For more details, contact us.</p>
      </Info>
    </>
  );
}

export default App;
