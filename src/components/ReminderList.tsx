import Reminder from '../models/reminders';

interface ReminderListProps {
  items: Reminder[];
}

function ReminderList({ items }: ReminderListProps) {
  return (
    <ul className='list-group'>
      {items.map((i) => (
        <li className='list-group-item' key={i.id}>
          {i.title}
          <button className='btn btn-outline-danger'>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
