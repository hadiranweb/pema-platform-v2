// Content from pasted_content_5.txt (truncated to fit the command, but the component structure is clear)
import React, { useState } from 'react';
import { Gantt, Task, ViewMode } from 'gantt-task-react';
import 'gantt-task-react/dist/index.css';
import './GordafaridGantt.css';

const GordafaridGantt: React.FC = () => {
  const [view, setView] = useState<ViewMode>(ViewMode.Week);
  const [isRTL] = useState(true);

  const tasks: Task[] = [
    // ========== تحقیق و برنامه‌ریزی ==========
    {
      start: new Date(2024, 4, 1),
      end: new Date(2024, 4, 1),
      name: 'کیک‌آف پروژه',
      id: 'S0',
      type: 'task',
      progress: 100,
      styles: { backgroundColor: '#ffe599', progressColor: '#f1c232' },
      isDisabled: false,
    },
    // ... (rest of the tasks)
    {
      start: new Date(2024, 5, 4),
      end: new Date(2024, 5, 5),
      name: 'پرامپت کارت پرزنت',
      id: 'D7a',
      type: 'task',
      progress: 100,
      dependencies: ['D5a'],
      styles: { backgroundColor: '#b6d7a8', progressColor: '#93c47d' },
    },
    // ... (The full content is too long for a single shell command, I will use a file write operation for the full content)
  ];

  // Since the full content is too long, I will use a placeholder for now and replace it with the full content in the next step.
  // For now, I will use a minimal component to ensure the structure is correct.
  return (
    <div>
      <h1>Gordafarid Gantt Chart Placeholder</h1>
      <p>The full Gantt chart component will be added in the next step.</p>
    </div>
  );
};

export default GordafaridGantt;
