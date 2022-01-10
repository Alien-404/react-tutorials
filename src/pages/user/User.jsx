import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './user.css'

export default function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className='userTitle'>Edit User</h1>
                <Link to='/new-user'>
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://www.pngkey.com/png/detail/147-1474488_2hugumin-megumin-chibi-png.png" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Naru 404</span>
                            <span className="userShowTitle">Website Backend</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">naru123</span>
                        </div>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon" />
                        <span className="userShowInfoTitle">26-08-2002</span>
                    </div>

                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon" />
                        <span className="userShowInfoTitle">+62 123 234 456</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon" />
                        <span className="userShowInfoTitle">naru@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon" />
                        <span className="userShowInfoTitle">JAKARTA | INDO</span>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder='naru403' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input
                                type="text"
                                placeholder="Naru"
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                type="text"
                                placeholder="naru@gmail.com"
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                type="text"
                                placeholder="+62 123 234 456"
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input
                                type="text"
                                placeholder="JAKARTA | INDO"
                                className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg"
                                src="https://www.pngkey.com/png/detail/147-1474488_2hugumin-megumin-chibi-png.png"
                                alt=""
                                />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
