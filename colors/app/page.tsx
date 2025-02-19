'use client';

import { useState } from 'react';

export default function Page() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'take out the trash', time: '9:00 AM', completed: true },
    { id: 2, text: 'do homework', time: '12:00 PM', completed: true },
    { id: 3, text: 'go to grocery store', time: '1:00 PM', completed: false },
    { id: 4, text: 'run 5 kilometers', time: '4:20 PM', completed: false },
    { id: 5, text: 'load the dishwasher', time: '9:00 PM', completed: false },
    { id: 6, text: 'Take out the trash', time: '9:00 AM', completed: false },
  ]);

  return (
    <main className="flex justify-center items-center min-h-screen bg-primary-foreground">
      <section className="bg-primary-foreground shadow-lg rounded-lg p-6 w-96">
        <header className="flex justify-between text-primary-foreground text-sm">
          <time className="font-medium">Tue Feb 18 2025</time>
          <span>9:31:25 p.m.</span>
        </header>

        <h2 className="text-lg font-bold text-primary mt-2">List Tailwind</h2>

        <nav className="mt-4">
          <ul className="flex justify-between text-primary-foreground text-sm">
            {['s', 'm', 't', 'w', 't', 'f', 's'].map((day, index) => (
              <li key={index} className={index === 0 ? 'font-medium' : ''}>
                {day}
              </li>
            ))}
          </ul>

          <ul className="flex justify-between text-primary text-sm">
            {[24, 25, 26, 27, 28, 29, 30].map((date) => (
              <li key={date} className={date === 24 ? 'font-bold' : ''}>
                {date}
              </li>
            ))}
          </ul>
        </nav>

        <ul className="mt-4 space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-secondary p-3 rounded-lg"
            >
              <span className={`text-xl ${task.completed ? 'text-primary-foreground' : 'text-primary-foreground'}`}>
                {task.completed ? '✔' : '○'}
              </span>
              <p className={`flex-grow text-primary-foreground font-semibold ml-2 ${task.id === 1 || task.id === 2 ? 'line-through' : ''}`}>
                {task.text}
              </p>
              <time className="text-primary-foreground font-semibold">{task.time}</time>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

