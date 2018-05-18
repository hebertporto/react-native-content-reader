import { startApp } from '../navigation'
import { initializeAxios } from './axios'

export function initializeApp () {
  initializeAxios()
  startApp()
}
