import { createUseStyles } from 'react-jss'
import './styles/circleprogress.css'
export const CircleProgress = () => {

    const useStyles = createUseStyles({



        "mt-100": {
            margin: {
                top: 200
            },
        },


        wrapper: {
            backgroundColor: '#770099',
            color: '#ffffff'
        }
    });


    return (


        <div className="circle-wrap">
            <div className="circle">
                <div className="mask half">
                    <div className="fill"></div>
                </div>
                <div className="mask full">
                    <div className="fill"></div>
                </div>
                <div className="inside-circle"> 75% </div>
            </div>


        </div>





    )



}



