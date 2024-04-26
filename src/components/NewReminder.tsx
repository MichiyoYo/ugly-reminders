import { createRef, useEffect, useState } from 'react';

interface NewReminderProps {
  onAdd: (title: string) => void;
}

function NewReminder({ onAdd }: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState('');
  const inputRef = createRef<HTMLInputElement>();

  useEffect(() => {
    inputRef?.current?.focus();
  }, [inputRef]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(title);
    setTitle('');
  };

  return (
    <form>
      <label htmlFor='Add Reminder'></label>
      <input
        ref={inputRef}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type='text'
        className='form-control'
      />
      <button
        type='submit'
        onClick={onSubmit}
        className='btn btn-primary rounded-pill my-3'
      >
        Add Reminder
      </button>
    </form>
  );
}

export default NewReminder;
