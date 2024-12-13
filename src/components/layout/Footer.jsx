import { SlEqualizer } from "react-icons/sl";
import { SlGhost } from "react-icons/sl";
import { SlPuzzle } from "react-icons/sl";

import styles from './Footer.module.css'

function Footer(){
    return (
        <footer>
            <ul className={styles.social_list}>
                <li className={styles.icons_list}>
                    <SlEqualizer />
                </li>
                <li className={styles.icons_list}>
                    <SlGhost />
                </li>
                <li className={styles.icons_list}>
                    <SlPuzzle />
                </li>
            </ul>
        </footer>
    )
}
export default Footer