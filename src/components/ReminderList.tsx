import Reminder from '../models/reminders';

interface ReminderListProps {
  items: Reminder[];
  onRemove: (id: number) => void;
}

function ReminderList({ items, onRemove }: ReminderListProps) {
  return (
    <ul className='list-group'>
      {items.map((i) => (
        <li
          className='list-group-item d-flex justify-content-between'
          key={i.id}
        >
          {i.title}
          <button
            className='btn btn-outline-danger'
            onClick={() => onRemove(i.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
