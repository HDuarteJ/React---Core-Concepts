import Header from './components/header/Header';
import CoreConcept from './components/core concepts/CoreConcepts';
import { CORE_CONCEPTS } from './data';
import TabButton from './components/tab button/TabButton';
import { EXAMPLES } from './data';
import { useState } from 'react';
import TabContent from './components/tab content/TabContent';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();   

  function handleSelect(selectedButton) { 
    setSelectedTopic(selectedButton)
  } 

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts!</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem, index) => (
            <CoreConcept key={index}{...conceptItem}/>
          ))}   
        </ul>
        </section>        
        <section id="examples"> 
          <h2>examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==='components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'}onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
            <TabContent selectedTopic={selectedTopic}>{selectedTopic}</TabContent>
        </section>        
      </main>
    </div>  
  );
}

export default App;
