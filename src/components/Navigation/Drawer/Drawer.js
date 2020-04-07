import React, {Component} from "react";
import classes from './Drawer.css'
import  {NavLink} from 'react-router-dom'
import Backdrop from "../../UI/Backdrop/Backdrop";

class Drawer extends Component{

    clickHandler = () => {
        this.props.onClose()
    };

    renderLinks(Links){
        return Links.map((link, index) => {
            return(
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = [classes.Drawer];

        if(!this.props.isOpen){
            cls.push(classes.close)
        }

        const Links = [
            {to: '/', label: 'Список', exact: true},
        ]

        if (this.props.isAuthentificated){
            Links.push({to: '/quiz-creator', label: 'Создать тест', exact: false})
            Links.push({to: '/logout', label: 'Выйти', exact: false})
        }else {
            Links.push({to: '/auth', label: 'Авторизация', exact: false})
        }

        return(
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(Links)}
                    </ul>
                </nav>
                { this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null }
            </React.Fragment>
        )
    }
}

export default Drawer