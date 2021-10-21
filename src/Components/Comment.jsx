import { useState } from "react"
import styles from "./comments.module.css"

export default function Comment({ replies }) {
  const [show,setShow]=useState(false)
    return (
        <div className={styles.comments}>
            <div className={styles.comentBox}>
        <div className={styles.close} onClick={() => {
                setShow(!show)
          }}>
          +</div>
      
        <div className={show ? `${styles.box1}`: `${styles.box}`}>
            <div className={styles.subH}>{replies.author}  { replies.points}Points {replies.timestamp}</div>
            <div className={styles.head}>{replies.body}</div>
            
            <div className={styles.btn}>
                <button>reply</button>
                <button>forward</button>
                <button>give award</button>
                <button>share report</button>
                <button>save</button>
            </div>
        </div>
    
        {show && (
            <div className={styles.box1}>{replies.replies?replies.replies.map((data) => {
                return <Comment replies={ data}/>
            }):""}</div>
        )}
            </div>
            </div>
       
    )
}