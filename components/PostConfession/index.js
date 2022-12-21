import { useWeb3Contract } from 'react-moralis'
import { abi, contractAddress } from '../../constants'
import { useMoralis } from 'react-moralis'
import { useEffect, useState } from 'react'
import { useNotification } from 'web3uikit'
import ClipLoader from 'react-spinners/ClipLoader'
import styles from './style.module.css'

export default function PostConfession() {
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const confessionDapp = chainId in contractAddress ? contractAddress[chainId][0] : null

    const [confession, setConfession] = useState('')
    const [confessions, setConfessions] = useState([])

    const dispatch = useNotification()

    const colors = ['#2a0b77', '#6e0b77', '#0b3d77', '#2d4903'];

    /** defining contract functions */

    const {
        runContractFunction: confess,
        isLoading,
        isFetching,
    } = useWeb3Contract({
        abi: abi,
        contractAddress: confessionDapp,
        functionName: 'confess',
        params: { confession },
    })

    const { runContractFunction: getConfessions } = useWeb3Contract({
        abi: abi,
        contractAddress: confessionDapp,
        functionName: 'getConfessions',
        params: {},
    })

    /** React state changing functions */

    async function updateUi() {
        const confessionsListFromCall = await getConfessions()
        setConfessions(confessionsListFromCall)
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUi()
        }
    }, [isWeb3Enabled]) // isWeb3Enabled is false for a split sec when browser loads page, then turns true

    const handleSuccess = async function (tx) {
        await tx.wait(1)
        handleNewNotification(tx)
        updateUi()
    }

    const handleNewNotification = function () {
        dispatch({
            type: 'info',
            message: 'Your confession has been posted successfully!',
            title: 'Posted',
            position: 'topL',
            icon: 'bell',
        })
    }

    const handleNoConfession = function () {
        dispatch({
            type: 'error',
            message: 'Please enter a confession before pressing button',
            title: 'Empty message',
            position: 'topL',
            icon: 'bell',
        })
    }

    return (
        <>
            <div className={styles.postSection}>
                <textarea
                    rows="4"
                    cols="50"
                    placeholder="Type your confession here...😉 😏"
                    className={styles.confessionInput}
                    type="text"
                    onChange={(event) => setConfession(event.target.value)}
                />
                <button
                    className={styles.btn}
                    onClick={async function () {
                        if (confession.length === 0) {
                            return handleNoConfession()
                        }
                        await confess({
                            onSuccess: handleSuccess,
                            onError: (error) => console.log(error),
                        })
                    }}
                >
                    Post Confession
                </button>
                <ClipLoader
                    color="#5070dd"
                    loading={isLoading || isFetching}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
            <div>
                <h1 className={styles.heading}>Previous Confessions:</h1>
                {confessions.map((message, index) => (
                    <div style={{background: `${colors[index%4]}`}} className={styles.confession} key={index}>
                        <span className={styles.confessionID}>#{index + 1}</span>{' '}
                        <span className={styles.confessionMessage}>{message.length === 0 ? '[Empty confession]' : message}</span>
                    </div>
                ))}
            </div>
        </>
    )
}
