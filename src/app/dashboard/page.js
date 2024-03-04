import { Suspense } from "react"
import { AddTodo } from "@/components/formAddTodo"

async function getData(id) {
    const res = await fetch(`https://dummyjson.com/todos/user/${id}`)

    if (!res.ok) {
        throw new Error('failed to fetch data')
    }

    return res.json()
}

export default async function Page() {

    const userId = 5
    var todos = await getData(userId)

    return (
        <section>
            <div className="max-w-3xl mx-auto bg-white mt-20">
                <h2 className="text-center font-semibold mb-6 text-2xl">My TODO List</h2>
                <div className="rounded-lg shadow-xl p-4 border border-gray-100">
                    <AddTodo />
                    <div className="w-full my-4 h-px border-t border-gray-200"></div>
                    <ul>
                        <Suspense fallback={ <p>Loading...</p> }>
                        {todos.todos.map((item) => (
                            <li key={item.id} className="text-gray-700 p-2 border rounded mt-4 flex items-center hover:bg-gray-50">
                                {item.completed ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-500 mr-2">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-300 mr-2">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>
                                )}

                                <span>{ item.todo }</span>
                                <span>Testing</span>
                            </li>
                        ))}
                        </Suspense>
                    </ul>
                </div>
            </div>
        </section>
    );
}