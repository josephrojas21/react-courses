import React, {Component} from 'react';


const LoginButton = () =>{
    return(<button>Iniciar sesion</button>)
}

const LogoutButton = () =>{
    return(
        <div>
            <p>Bienvenido usuario</p>
            <button>Cerrar sesion</button>
        </div>
    )
}


export default class ConditionalSection extends Component{
    constructor(props){
        super(props)
        this.state = { isUserLogged: false}
    }

    render() {
        return (
            <div>
                <h4> Conditional render</h4>
                {this.state.isUserLogged ? <LoginButton/>: <LogoutButton/>}

            </div>
        )
    }
}