import styles from './LogOut.module.css'

const LogOut = ({logOut}) => {

    const handleLogOut = (e)=>{
        logOut()
    }

    return<>
            <button className={styles.logOutButton} onClick={handleLogOut}>Log Out</button>
        </>
}

export default LogOut;