import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignOutLink from './SignOutLink'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { profile , auth } = props

    const links = auth.uid ? <SignedInLink profile={profile}/> : <SignOutLink/>
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Noodle</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps =  (state) => {
    return {
        auth : state.firebase.auth,
        profile : state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)