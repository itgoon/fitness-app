import * as Styled from "../styled";
import LinearProgress from '@mui/material/LinearProgress';
import CP from "..";
import { useEffect, useState } from 'react';
import { QRProgressWrapper } from '../styled';

export interface ModalPrograssProps {
    onClick: () => void;
    timeType?: string;
    timeUnit: "초" | "분" | "시간";
}

const ModalPrograss = ({
    onClick,
    timeType,
    timeUnit,
}: ModalPrograssProps) => {

    const [isTime, setIsTime] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTime((prevIsTime) => {
                if (prevIsTime > 1) {
                    return prevIsTime - 1;
                }
                return prevIsTime = isTime;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    const resetTestprogress = () => {
        let progress = 0;
        try {
            if(isTime !== undefined)
            progress = Math.max(0, isTime / 60 * 100)
        } catch (err) {
            progress = 0;
        }
        return progress;
    }

    const resetTestTimer = () => {
        let progress = 0;
        try {
            if(isTime !== undefined) {
                progress = (isTime -1 % 60);
            }
        } catch (err) {
            return progress = 0;
        }

        return String(progress).padStart(2, "0");
    }

    return (
        <QRProgressWrapper>
            <CP.Styled.Div padding='15px'>
                <CP.Styled.EmptyButton onClick={onClick}>
                    <CP.Icon
                        name="material-symbols-light:qr-code-2"
                        color="--dark-color"
                        style={{ width: "100%", height: "100%", aspectRatio: "1/1" }}
                    />
                </CP.Styled.EmptyButton>

                <LinearProgress
                    variant="determinate"
                    value={resetTestprogress()} />

                <CP.Styled.Typography variant="h4" weight="normal" inline={false} style={{ marginTop: "15px" }} >
                    {`${timeType} : ${resetTestTimer()} ${timeUnit}`}
                </CP.Styled.Typography>
            </CP.Styled.Div>

        </QRProgressWrapper>
    );
};

export default ModalPrograss;

