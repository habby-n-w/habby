import GaugeCircle from "@/components/magicui/gauge-circle";
import { useTodoStore } from "@/store/todoStore";

const CompleteTask = () => {
    const { todos } = useTodoStore()

    // Calculate percentage of completed tasks
    const completedTasksCount = todos.filter(todo => todo.completed).length;
    const totalTasksCount = todos.length;
    const completionPercentage = totalTasksCount > 0 ? (completedTasksCount / totalTasksCount) * 100 : 0;

    return (
        <div className="w-full flex items-center justify-between bg-purpleapp p-5 text-white rounded-2xl shadow-lg">
            <div className="md:text-2xl text-lg font-semibold">
                Total Task Completed
            </div>
            <GaugeCircle className="h-20 w-20" gaugePrimaryColor="green" gaugeSecondaryColor="white" value={completionPercentage} />
        </div>
    );
}

export default CompleteTask;
