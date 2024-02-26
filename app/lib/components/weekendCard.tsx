import { CardMedia } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Typography from "@mui/material/Typography"
import Image from "next/image"


function WeekendCard ({
    weekend
}: {
    weekend: boolean
}) {

    const dagen = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]

    return (
        <>
            <Card className="rounded-xl m-5" sx={{maxWidth: '384px'}} elevation={0}>
                <CardHeader 
                    title="Is het al weekend?" 
                    subheader={'Het is vandaag ' + dagen[new Date().getDay()] + (weekend ? ', dat betekend weekend!' : '')}
                    className="text-center" 
                />
                <CardContent>
                <CardMedia>
                    <Image
                        src={weekend ? '/weekend.jpg' : '/geen_weekend.jpg'}
                        width={500}
                        height={700}
                        alt={weekend ? 'Het is weekend!' : 'Het is geen weekend...'}
                        className="rounded-xl"
                    />
                </CardMedia>
                    <Typography className="mt-3 text-center" variant="body2">
                        {weekend ? 'Trek de koelkast maar los!' : 'Nog even wachten dus...'}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default WeekendCard