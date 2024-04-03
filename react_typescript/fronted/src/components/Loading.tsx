import { PulseLoader } from "react-spinners"


function Loading(loading: boolean) {
    return (
        <>
            {
                loading ? (<div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translateX(-50%)'
                }}>

                    <PulseLoader

                        size={40}
                        color="#1C0E74"
                    />
                </div>) : null}

        </>
    )
}

export default Loading