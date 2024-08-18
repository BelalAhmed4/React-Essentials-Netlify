import reactImg from '../assets/react-core-concepts.png'
// Decription Data 
let descriptionData = ["Core", "Fundemental", "Cruical"]
// Functions
function genRandomNum(max) {
  return Math.floor(Math.random() * (max + 1))
} 
//! Header Component
export default function Header() {
  const description = descriptionData[genRandomNum(descriptionData.length - 1)] 
  return (
    <header>
      <img src={reactImg} />
        <h1>React Essentials</h1>
        <p>
        {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}