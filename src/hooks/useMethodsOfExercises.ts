import { useStore } from 'src/store'
import { useQuasar } from 'quasar'
import { ICategories, IExercise } from 'src/store/categories/types'

export default function useMethodsOfExercises (category: ICategories, emit: Function) {
  const store = useStore()
  const $q = useQuasar()

  const createExercise = async (title: string, weight: boolean): Promise<void> => {
    try {
      const data = {
        data: {
          title: title,
          isOwnWeight: weight,
          isTimer: category.isTimer
        },
        _id: category._id
      }

      await store.dispatch('createExercise', data)
      emit('create-mode')
      $q.notify({
        type: 'positive',
        message: 'Exercise is created'
      })
    } catch (e) {
      console.error(e)
    }
  }

  const editExercise = async (title: string, weight: boolean, exercise: IExercise): Promise<void> => {
    try {
      const editData = {
        exerciseId: exercise._id,
        categoryId: category._id,
        data: {
          title: title,
          isOwnWeight: weight
        }
      }
      await store.dispatch('editExercise', editData)
      emit('create-mode')
      $q.notify({
        type: 'positive',
        message: 'Exercise is edited'
      })
    } catch (e) {
      console.log(e)
    }
  }

  return {
    createExercise,
    editExercise
  }
}
