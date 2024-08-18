import TabButton  from '../components/TabButton'
import { EXAMPLES } from '../data';
import Section from './Section'
import Tabs from './Tabs'
import { useState } from 'react'
export default function Examples() {
  const [value, setValue] = useState()
   function handleSelect(selectedButton) {
   setValue(selectedButton)
  }
   let tabContent = <p>Please Choose a Topic</p>
  if (value) {
    tabContent =  <div id="tab-content">
            <h3>{EXAMPLES[value].title}</h3>
            <p>{EXAMPLES[value].description}</p>
            <pre>
              <code>
                 {EXAMPLES[value].code}
              </code>
            </pre>
        </div>
  }
  return (
    <Section title="Examples" id='examples'>
      <Tabs buttons={ 
        <>
          <TabButton isSelected={value === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={value === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={value === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={value === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
        </>
      }>
        {tabContent}
      </Tabs>
    </Section>

  );
}