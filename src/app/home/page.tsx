import Footer from "../_components/footer";
import Timer from "../_components/Timer";
import TodoList from "../_components/TodoList";

const Home = () => {
    return ( <div className="flex items-center justify-center min-h-screen">
        <TodoList/>
        <Footer/>
    </div> );
}
 
export default Home;