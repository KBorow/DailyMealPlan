import React from 'react';




class Header extends React.Component{
    render(){
        return (
            <header>
                <div className="container">
                    <a href="/"><span className="logo">Daily<span className="logo_color">Meal</span>Plan</span></a>
                    <nav>
                        <ul>
                            <li><a href="/how-it-works">Jak to działa</a></li>
                            <li><a href="about">O nas</a></li>
                            <li><a href="/contact">Kontakt</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}


export {Header}