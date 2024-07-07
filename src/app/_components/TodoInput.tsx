import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useDialogControlStore } from '@/store/dialogControlStore'
import { useTodoStore } from '@/store/todoStore'
import { useState } from 'react'

const TodoInput = () => {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore()
  const { open, setOpen } = useDialogControlStore()

  const [title, setTitle] = useState('')
  const [duration, setDuration] = useState('')
  const handleAddTodo = () => {
    const newTodo = {
      id: String(Date.now()),
      title: title,
      duration: Number(duration),
      completed: false,
      started: false,
    }
    addTodo(newTodo)
    setOpen(false)
  }
  console.log(todos, open)
  return (
    <div className="flex flex-col items-center justify-center w-full gap-9">
      <div className="text-2xl font-semibold">Add Task</div>
      <div className="w-full">
        <Input
          className="border-2 focus:border-purple-300"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Task Title"
        />
      </div>
      <div className="w-full">
        <Select value={duration} onValueChange={(value) => setDuration(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="30">30 minutes</SelectItem>
            <SelectItem value="60">1 Hour</SelectItem>
            <SelectItem value="120">2 Hour</SelectItem>
            <SelectItem value="180">3 Hour</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button
        onClick={handleAddTodo}
        disabled={!title && !duration}
        className="w-full bg-purpleapp hover:bg-purpleapp/80"
      >
        Add Task
      </Button>
    </div>
  )
}

export default TodoInput
