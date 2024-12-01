import List from "./List.tsx"
function App() {
const fruits = [
    {id: 1, name: "Apple", calories: 100},
    {id: 2, name: "Mango", calories: 200},
    {id: 3, name: "Passion Fruit", calories: 300},
    {id: 4, name: "Pineapple", calories: 400}
].sort((fruit1, fruit2) => fruit1.name.localeCompare(fruit2.name));

const vegetables = [
  {id: 5, name: "Potatos", calories: 100},
  {id: 6, name: "Tomatos", calories: 200},
  {id: 7, name: "Carrots", calories: 300},
  {id: 8, name: "Corn", calories: 400}
].sort((fruit1, fruit2) => fruit1.name.localeCompare(fruit2.name));

return (
    <>
      <List items={fruits} category="Fruits"/>
      <List items={vegetables} category="Vegetables"/>
    </>
  )
}

export default App
