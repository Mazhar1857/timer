import React, { useEffect, useState } from 'react';
import './timerClock.css';
import playImg from '../assets/play-round-icon.png';
import stopImg from '../assets/pause-round-icon.png';

function TimerClock() {
    const [play, setPlay] = useState(false);
    const [height, setHeight] = useState('20px');
    const [padding, setPadding] = useState('0px');
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    const handlePlayPause = () => {
        setPlay((pre) => {
            return !pre;
        })
        setHeight((pre) => {
            return pre === '20px' ? '10px' : '20px'
        })
        setPadding((pre) => {
            return pre === '0px' ? '10px' : '0px'
        })
    }

    useEffect(() => {
        let interval;
        if (play) {
            interval = setInterval(() => {
                setSec((pre) => {
                    if (pre < 60) {
                        return pre + 1;
                    } else {
                        setMin((pre) => {
                            return pre + 1
                        })
                        return 0;
                    }
                })
            }, 1000);

            return () => {
                clearInterval(interval)
            }
        }

    }, [play])


    return (
        <div className='timer-clock-component'>
            <div style={{ '--padding': padding }}>
                <div ></div>
                <div style={{ '--height': height }}></div>
            </div>
            <div>
                <div>Timer</div>
                <div>{min < 10 ? '0' + min : min}:{sec < 10 ? '0' + sec : sec}</div>
                <img src={play ? stopImg : playImg} alt="play/pause" onClick={handlePlayPause} />
            </div>
        </div >
    )
}

export default TimerClock;
