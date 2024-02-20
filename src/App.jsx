import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";


const inicialTodos = JSON.parse(localStorage.getItem('todos')) || []

const App = () => {

  const [todos, setTodos] = useState(inicialTodos)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const habldeDragEnd = (result) => {
    if (!result.destination) return;
    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    const copyArray = [...todos]

    const [reorderItem] = copyArray.splice(startIndex, 1 );
     
    copyArray.splice(endIndex, 0, reorderItem)
    
    setTodos(copyArray);

  };


  return (
    <DragDropContext onDragEnd={habldeDragEnd}>
      <h1>Todo</h1>
      <Droppable droppableId="todos">
        {
          (droppableProvider) => (
            <ul ref={droppableProvider.innerRef}
              {...droppableProvider.droppableProps}>

              {todos.map((todo, index) => (
                <Draggable index={index} key={todo.id} draggableId={`${todo.id}`}>
                  {
                    (draggableProvider) => (
                      <li
                        ref={draggableProvider.innerRef}
                        {...draggableProvider.dragHandleProps}
                        {...draggableProvider.draggableProps}
                      >{todo.text}</li>
                    )

                  }

                </Draggable>
                //Siempre que se envuelva un elemento hay que mover la Key al elemento principal
              ))}
              {droppableProvider.placeholder}
            </ul>
          )
        }
      </Droppable>
    </DragDropContext>
  )

}


export default App;