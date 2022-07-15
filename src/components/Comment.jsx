import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} className={styles.avatar} src="https://github.com/franciscogazaniga.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentArea}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Francisco Eduardo (você)</strong>
              <p title="12 de julho às 19:23h" dateTime="2022-07-12 19:23:00">Cerca de 2h</p>
            </div>

              <button onClick={handleDeleteComment} title='Deletar comentário'>
                <Trash size={24}/>
              </button>
          </header>


          <div className={styles.commentText}>
            <p>{content}</p>
          </div>
        </div>

        <footer>
          <button title='Aplaudir'>
            <ThumbsUp size={20}/> Aplaudir <span>03</span>
          </button>
        </footer>
      </div>
    </div>
  )
}