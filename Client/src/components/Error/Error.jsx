import styles from "./Error.module.css"

const Error = ()=> {

    return <div className={styles.errorContainer}>
                <div className={styles.errorTextContainer}>
                    <h1 className={styles.errorText}>-404-</h1>
                </div>
                <div className={styles.errorComent}>
                    <span>Como llegaste hasta aquí??..</span>
                    <div className={styles.errorIconContainer}>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-face-id-error" 
                        width="100%" height="100%" 
                        viewBox="0 0 24 24" 
                        stroke-width="2" 
                        stroke="currentColor" 
                        fill="none" stroke-linecap="round" 
                        stroke-linejoin="round"> 
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/> 
                            <path d="M4 8v-2a2 2 0 0 1 2 -2h2" /> 
                            <path d="M4 16v2a2 2 0 0 0 2 2h2" /> 
                            <path d="M16 4h2a2 2 0 0 1 2 2v2" /> 
                            <path d="M16 20h2a2 2 0 0 0 2 -2v-2" /> 
                            <path d="M9 10h.01" /> <path d="M15 10h.01" /> 
                            <path d="M9.5 15.05a3.5 3.5 0 0 1 5 0" /> 
                        </svg>
                    </div>
                </div>
    </div>
}

export default Error