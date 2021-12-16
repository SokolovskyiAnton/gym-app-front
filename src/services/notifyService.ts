import { Notify } from 'quasar'

class NotificationService {
  static createNotification (caption: string, message: string, type = 'Error') {
    const defaultMessage = NotificationService.getCapitalizedText(type)
    return Notify.create({
      type,
      message: message || defaultMessage,
      caption
    })
  }

  static getCapitalizedText (text: string): string {
    return text.charAt(0).toUpperCase()
  }
}

export default NotificationService
