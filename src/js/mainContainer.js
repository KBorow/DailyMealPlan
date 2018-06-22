import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {DailyMealsTable} from "./dailyMealsTabel"



class Generator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type: "standard",
            kcal: "1000 kcal",
            meals: "4 posiłki",
            clicked: "",
            generate: false
        }
    }

    changeType = (e, param ,id) =>{
        let kcal2 = this.state.kcal;
        if(param === "sport"){
            kcal2 = "3000 kcal"
        }else {
            kcal2 = "1000 kcal"
        }
        this.setState({
            type: param,
            kcal: kcal2,
            clicked: id
        });

    };

    changeGenerate = () => {
        this.setState({
            generate: false
        }, () => {
            this.setState({
                generate: true
            })
        });
    }

    changeKcal = (e) => {
        if (e === null){
            return null
        }else {
            this.setState({
                kcal: e.value
            })
        }
    }

    changeMeals = (e) => {
        if (e === null){
            return null
        }else {
            this.setState({
                meals: e.value
            })
        }
    }

    render(){
        let selectList = [];
        if (this.state.type === "sport"){
            selectList =
                <Select className="select-2"
                        name="form-field-name"
                        value={this.state.kcal}
                        onChange={this.changeKcal}
                        options={[
                            { value: '3000 kcal', label: '3000 kcal' },
                            { value: '4000 kcal', label: '4000 kcal' },
                        ]}
                />
        }else{
            selectList =
                <Select className="select-2"
                        name="form-field-name"
                        value={this.state.kcal}
                        onChange={this.changeKcal}
                        options={[
                            { value: '1000 kcal', label: '1000 kcal' },
                            { value: '1500 kcal', label: '1500 kcal' },
                            { value: '2000 kcal', label: '2000 kcal' },
                            { value: '2500 kcal', label: '2500 kcal' },
                        ]}
                />
        }
        let { clicked } = this.state;
        return(
            <div className="generator-header">
                <div className="container">
                    <div className="generator-top">
                        <div className="diet-type">
                            <ul className="diet-type-menu">

                                <li key={1} style={clicked === "1" ? {backgroundColor: "rgba(255,215,0, 0.4)"} : {backgroundColor: "transparent"}} onClick={(e) => this.changeType(e, "standard", "1")} className="single-diet"><div className="img-menu-standard"></div></li>

                                <li key={2} style={clicked === "2" ? {backgroundColor: "rgba(255,215,0, 0.4)"} : {backgroundColor: "transparent"}} onClick={(e) => this.changeType(e, "sport", "2")} className="single-diet"><div className="img-menu-sport"></div></li>

                                <li key={3} style={clicked === "3" ? {backgroundColor: "rgba(255,215,0, 0.4)"} : {backgroundColor: "transparent"}} onClick={(e) => this.changeType(e, "vege", "3")} className="single-diet"><div className="img-menu-vege"></div></li>

                                <li key={4} style={clicked === "4" ? {backgroundColor: "rgba(255,215,0, 0.4)"} : {backgroundColor: "transparent"}} onClick={(e) => this.changeType(e, "glutenFree", "4")} className="single-diet"><div className="img-menu-gluten"></div></li>

                                <li key={5} style={clicked === "5" ? {backgroundColor: "rgba(255,215,0, 0.4)"} : {backgroundColor: "transparent"}} onClick={(e) => this.changeType(e, "lactoseFree", "5")} className="single-diet"><div className="img-menu-lactose"></div></li>

                            </ul>
                        </div>
                        <div className="select-kcal-meals">
                                {selectList}
                            <Select className="select-2"
                                name="form-field-name"
                                value={this.state.meals}
                                onChange={this.changeMeals}
                                options={[
                                    { value: '4 posiłki', label: '4 posiłki' },
                                    { value: '5 posiłków', label: '5 posiłków' },
                                ]}
                            />
                        </div>
                        <div className="button-generate">
                        <button onClick={this.changeGenerate}>Wylosuj dietę!</button>
                        </div>
                    </div>
                </div>

                {this.state.generate === true && <DailyMealsTable type={this.state.type} kcal={this.state.kcal} meals={this.state.meals}/>}

            </div>
        )
    }
}





class MainContainer extends React.Component{
    render(){
        return(
            <section id="main">
                <div className="container">
                    <article className="explanation">
                        <blockquote>
                            <strong>DailyMealPlan</strong> wylosuj <em>menu</em> <strong>na cały dzień</strong>
                        </blockquote>
                    </article>
                </div>
                <Generator/>
            </section>
        )
    }
}

export {MainContainer};