import { startApp } from '../navigation'
import { initializeAxios } from './axios'
import { initializeOneSignal } from './oneSignal'

export function initializeApp () {
  initializeOneSignal()
  initializeAxios()
  startApp()
}
