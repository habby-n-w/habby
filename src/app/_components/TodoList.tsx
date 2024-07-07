'use client'
import { useTodoStore } from '@/store/todoStore'
import { BadgeCheck, Ban, Check } from 'lucide-react'

const TodoList = () => {
  const { todos } = useTodoStore()
  return (
    <div className="flex flex-col gap-3 items-center justify-center max-w-[1000px] w-full p-5 ">
      <div className="text-2xl font-bold  text-left md:text-center w-full">
        Todos
      </div>
      <div className="space-y-2 md:w-1/2 w-full mt-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-slate-50 border-2 border-slate-100 shadow-xl flex items-center justify-between p-6 rounded-3xl"
          >
            <div className="">
              <div className="text-2xl font-semibold"> {todo.title}</div>
              <div> {todo.duration} minutes</div>
            </div>

            <div> {todo.completed ? <BadgeCheck  /> : <Ban className='text-red-500'/>}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
