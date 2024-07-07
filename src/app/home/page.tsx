import Footer from "../_components/footer";
import Timer from "../_components/Timer";
import TodoList from "../_components/TodoList";

const Home = () => {
    return ( <div className="flex items-start justify-center mt-20 min-h-screen">
        <TodoList/>
        <Footer/>
    </div> );
}
 
export default Home;