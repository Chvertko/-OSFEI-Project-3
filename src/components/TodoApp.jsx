import { Container } from "./Container"
import { HeaderTitle } from "./HeaderTitle"
import { TodoList } from "./TodoList"
import { TodoForm } from './TodoForm'


export const TodoApp = () => {
    
    return(
        <Container>
            <HeaderTitle/>
            <TodoForm/>
            <TodoList/>
        </Container>
    )
}