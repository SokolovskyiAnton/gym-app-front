import { Notify } from 'quasar'

class NotificationService {
  static createNotification (message: string, type = 'negative') {
    return Notify.create({
      type,
      message: message
    })
  }

  static getCapitalizedText (text: string): string {
    return text.charAt(0).toUpperCase()
  }
}

export default NotificationService
