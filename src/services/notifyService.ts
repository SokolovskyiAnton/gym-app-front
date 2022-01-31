import { Notify } from 'quasar'

class NotificationService {
  static createNotification (message: string, type = 'negative') {
    return Notify.create({
      type,
      message: message
    })
  }
}

export default NotificationService
