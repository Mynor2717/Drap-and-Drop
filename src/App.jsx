import { useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";


const inicialTodos = [
  { id: 1, text: 'Aprender algo' },
  { id: 2, text: 'Aprender algo' },
  { id: 3, text: 'Aprender algo' }

]

const App = () => {

  const [todos, setTodos] = useState(inicialTodos)
  return (
    <DragDropContext>
      <h1>Todo</h1>

      <ul>

        {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>

    </DragDropContext>
  )

}


export default App;