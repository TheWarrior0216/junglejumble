import { AppState } from "../AppState.js"
import { gameService } from "../services/GameService.js"

export class GameController {
  checkJumble() {
    event.preventDefault()
    const form = event.target
    const textarea = form.checkJumble
    const newJumble = textarea.value
    debugger
    const something = AppState.activeJumble.EndTime
    const somethingElse = AppState.activeJumble.FastestTime

    // window.alert(newJumble)
    gameService.checkJumble(newJumble)
  }
}