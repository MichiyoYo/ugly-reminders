import { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminders';
import ReminderService from './services/reminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const removeReminder = async (id: number) => {
    await ReminderService.removeReminder(id);
    setReminders(reminders.filter((r) => r.id !== id));
  };

  const loadReminders = async () => {
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  };

  return (
    <div className='App'>
      <ReminderList items={reminders} onRemove={removeReminder} />
    </div>
  );
}

export default App;
