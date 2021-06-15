import {PureComponent} from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Products from "./products";
import About from "./about";

class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/"> </Link>
                        </li>
                        <li>
                            <Link to="/products">Tovarlar</Link>
                        </li>
                        <li>
                            <Link to="/about">Biz haqimizda</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/products" component={Products}/>
                        <Route exact path="/about" component={About}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;