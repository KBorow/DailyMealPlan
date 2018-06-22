import React from 'react';


class Meal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            meal: null,
            anClass: "",
            show: true
        }
        this.mealsArr = [];
        this.baseUrl = `http://localhost:3001/recipes`;
    }

    loadingPlan = () => {
        fetch(this.baseUrl)
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                } else {
                    throw new Error("Błąd sieci!!")
                }
            }).then(data => {
            this.mealsArr = data;
            this.lodaingMeal();

            this.setState({
                loading: false
            })
        }).catch(err => {
            console.log(err)
        })
    };

    randomNumOfArr(arr) {
        let indexNum = Math.floor(Math.random() * Math.floor(arr.length));
        return arr[indexNum];

    }

    nextNumOfArr = () => {
        let newMeal = null;
        let indexNum = Math.floor(Math.random() * Math.floor(this.mealsArr.length));
        if (indexNum === this.state.meal){
            indexNum = Math.floor(Math.random() * Math.floor(this.mealsArr.length));
        }else {
            newMeal = this.mealsArr[indexNum]
        }
        this.setState({
            meal: newMeal,
            anClass: "animated flash",
            show:false
        }, () => {
            this.setState({
                show:true
            })
        })
    }

    lodaingMeal = () => {
        this.mealsArr = this.mealsArr.filter(el => {
            if (this.props.meal === el.meal && this.props.type === el.type && this.props.kcal === el.dailyCalories && this.props.meals === el.nrOfMeals) {
                return true;
            }else{
                return null
            }
        });

        this.setState({
            meal: this.randomNumOfArr(this.mealsArr)
        });
    }

    componentDidMount() {
        this.loadingPlan();
    }


    render() {
        if (this.state.loading) {
            return (
                        <div className="generated-meal">
                            <div className="meal-title"></div>
                            <div className="meal-ingredients-box">

                            </div>
                            <div className="meal-recepie-box">
                                <span className="recepie-title"></span>

                            </div>
                            <div className="change-meal">Zmień posiłek</div>
                        </div>
            )
        } else {
            if(this.state.show) {
                return (
                    <div className={"generated-meal " + this.state.anClass}>
                        <div className="meal-title"><h1>{this.state.meal.name}</h1></div>
                        <div className="meals-content">
                        <div className="meal-ingredients-box">
                            <span className="ingredients-title">Skadniki</span>
                            <div>{this.state.meal.ingredients.map((el, i) => {
                                return <li key={i}>{el}</li>
                            })}</div>
                        </div>
                        <div className="meal-recepie-box">
                            <span className="recepie-title">Przepis:</span>
                            <div>{this.state.meal.recepie}</div>
                        </div>
                        </div>
                        <div onClick={this.nextNumOfArr} className="change-meal">Zmień posiłek</div>
                    </div>
                )
            }else{
                return null
            }
        }
    }
}


class DailyMealsTable extends React.Component {
    render() {
        let selectList = [];
        if (this.props.meals === "5 posiłków") {
            selectList = [
                <Meal key={1} type={this.props.type} kcal={this.props.kcal} meals={this.props.meals} meal="breakfast"/>,
                <Meal key={2} type={this.props.type} kcal={this.props.kcal} meals={this.props.meals} meal="2meal"/>,
                <Meal key={3} type={this.props.type} kcal={this.props.kcal} meals={this.props.meals} meal="lunch"/>,
                <Meal key={4} type={this.props.type} kcal={this.props.kcal} meals={this.props.meals} meal="4meal"/>,
                <Meal key={5} type={this.props.type} kcal={this.props.kcal} meals={this.props.meals} meal="dinner"/>
            ]
        } else {
            selectList = [
                <Meal key={1} type={this.props.type} kcal={this.props.kcal} meals={this.props.meals} meal="breakfast"/>,
                <Meal key={2} type={this.props.type} kcal={this.props.kcal} meals={this.props.meals} meal="2meal"/>,
                <Meal key={3} type={this.props.type} kcal={this.props.kcal} meals={this.props.meals} meal="lunch"/>,
                <Meal key={5} type={this.props.type} kcal={this.props.kcal} meals={this.props.meals} meal="dinner"/>
            ]
        }
        return (
            <div className="daily-meals-container animated fadeInUp">
                <div className="container">
                    <div className="daily-meals-tabel">
                        {selectList}
                    </div>
                </div>
            </div>
        )
    }

}


export {DailyMealsTable};