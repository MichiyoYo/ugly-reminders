import axios from 'axios';
import Reminder from '../models/reminders';

class ReminderService {
  http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });

  async getReminders() {
    const response = await this.http.get<Reminder[]>('/todos');
    return response.data;
  }

  async addReminder(title: string) {
    const response = await this.http.post<Reminder>('/todos', {
      title,
    });
    return response.status;
  }

  async removeReminder(id: number) {
    const response = await this.http.delete('/todos/' + id);
    console.log(response);
    return response.data;
  }
}

//exporting an instance of this class so the consumer doesn't have to create a new one every time
export default new ReminderService();
