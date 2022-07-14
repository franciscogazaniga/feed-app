import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return(
    <aside className={styles.container}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profileData}>
        <Avatar src="https://github.com/franciscogazaniga.png"/>

        <strong>Leslie Alexander</strong>
        <span>UI Designer</span>
      </div>

      <footer>
        <a href="#"><PencilLine size={20} /> Editar seu perfil</a>
      </footer>
    </aside>
  )
}