import './widgetsmall.css'
import { Visibility } from "@material-ui/icons";

export default function WidgetSmall() {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
                <ul className="widgetSmList">
                    <li className="widgetSmListItem">
                        <img
                            src="https://www.pngkey.com/png/detail/147-1474488_2hugumin-megumin-chibi-png.png"
                            alt=""
                            className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Naru</span>
                            <span className="widgetSmUserTitle">Web Backend</span>
                        </div>
                            <button className="widgetSmButton">
                                <Visibility className="widgetSmIcon" />
                                Display
                            </button>
                    </li>
                    <li className="widgetSmListItem">
                        <img
                            src="https://www.pngkey.com/png/detail/147-1474488_2hugumin-megumin-chibi-png.png"
                            alt=""
                            className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Naru</span>
                            <span className="widgetSmUserTitle">Web Backend</span>
                        </div>
                            <button className="widgetSmButton">
                                <Visibility className="widgetSmIcon" />
                                Display
                            </button>
                    </li>
                    <li className="widgetSmListItem">
                        <img
                            src="https://www.pngkey.com/png/detail/147-1474488_2hugumin-megumin-chibi-png.png"
                            alt=""
                            className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Naru</span>
                            <span className="widgetSmUserTitle">Web Backend</span>
                        </div>
                            <button className="widgetSmButton">
                                <Visibility className="widgetSmIcon" />
                                Display
                            </button>
                    </li>
                </ul>
        </div>
    )
}
 