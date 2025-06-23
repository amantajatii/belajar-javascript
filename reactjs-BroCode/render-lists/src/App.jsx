import List from './List.jsx'

function App() {
    const fruits =  [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45}, 
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "coconut", calories: 159}, 
                    {id: 5, name: "pineapple", calories: 37}];
    const vegetables =  [{id: 1, name: "potatoes", calories: 110}, 
                    {id: 2, name: "carrots", calories: 45}, 
                    {id: 3, name: "corn", calories: 105}, 
                    {id: 4, name: "coconut", calories: 159}, 
                    {id: 5, name: "brocolli", calories: 37}];
                    
  return  (<>
          {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
          {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
          </>)
}

export default App
