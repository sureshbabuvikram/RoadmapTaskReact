import React from 'react';
import DataContextComponents from './Utils/DataContextComponents';
import Card from './Components/Card';

function App() {
  return (
    <div className="container">
      <div className="row">
        <DataContextComponents>
          <Card />
        </DataContextComponents>
      </div>
    </div>
  );
}

export default App;