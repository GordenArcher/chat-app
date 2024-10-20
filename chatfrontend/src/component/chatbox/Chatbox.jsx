import { Leftbox } from "./Leftbox"
import { MainViewChat } from "./MainViewChat"
import ChatboxStyle from './chatbox.module.css'

export const Chatbox = () => {
  return (
    <div className={ChatboxStyle.chatbox}>
        <div className={ChatboxStyle.boxcontainer}>
            <div className={ChatboxStyle.chatwrapper}>
                <div className={ChatboxStyle.leftbox}>
                    <Leftbox />
                </div>

                <div className={ChatboxStyle.viewchat}>
                    <MainViewChat />
                </div>
            </div>
        </div>
    </div>
  )
}
