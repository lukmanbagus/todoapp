'use client'

export function AddTodo() {

    async function addTodo(formData) {
        const userId = 5
        const res = await fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                todo: formData.get('todo'),
                completed: false,
                userId: userId,
            })
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
        })
    }

    return (
        <form action={addTodo} className="flex items-center gap-4">
            <input name="todo" className="w-full p-2 rounded border border-gray-200" placeholder="Create new task"/>
            <button type="submit" className="bg-blue-500 text-white font-semibold rounded px-4 py-2">Add</button>
        </form>
    )
}