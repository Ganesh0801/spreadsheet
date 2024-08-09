import React, { useState } from 'react';
import Grid from './component/Grid';
import Search from './component/Search';
import Header from './component/Header';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
         <Header />
     <div className="flex flex-col min-h-screen justify-center items-center bg-wheat">
 
      <div className="bg-white p-4 shadow-md rounded-md w-full max-w-4xl">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="mt-4">
          <Grid searchTerm={searchTerm} />
        </div>
      </div>
    </div>
    </>
   
  );
}

export default App;
