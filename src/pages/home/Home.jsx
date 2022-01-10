import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/feturedinfo/FeaturedInfo'
import './home.css'
import {UserData} from '../../dummyData';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import WidgetLarge from '../../components/widgetLarge/WidgetLarge';


export default function Home() {
    return (
        <div className='home' >
            <FeaturedInfo />
            <Chart data={UserData} title='User Analytics' grid dataKey='Active User' />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}
