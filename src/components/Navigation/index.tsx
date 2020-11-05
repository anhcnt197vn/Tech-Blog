import { HamburgerButton } from '../../icons/index'
import style from './Index.module.css'

interface Props {}

export const Navigation: React.FC<Props> = () => {
  return (
    <header className={style.header}>
      <a>
        <HamburgerButton />
      </a>
      <div>
        <ul className={style.listStyle}>
          <li><a>About me</a></li>
          <li><a>Contact</a></li>
          <li><a>E-Book</a></li>
          <li><a>FAQ</a></li>
          <li><a>Publications</a></li>
          <li><a>Travel Resources</a></li>
          <li><a>Work with me</a></li>
          <li><a>Youtube</a></li>
        </ul>
      </div>
    </header>
  )
}