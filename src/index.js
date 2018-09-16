import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Home from './components/home';
import LandingPage from './components/landing-page';
import SupplementalBenefits from './components/supplemetal-benefits';
import SpousalDeath from './components/spousal-death';
import NewLifeInsurance from './components/new-parent-life-insurance';
import SecondLifeInsurance from './components/second-life-insurance';
import DivorcedParents from './components/divorced-retirement';
import AgingParents from './components/aging-parents';
import AutoCoverage from './components/auto-coverage';
import HealthInsurance from './components/health-insurance';
import RentersInsurance from './components/renters-insurance';
import FindScenario from './components/find-your-scenario';
import AllAboutElle from './components/all-about-elle';
import Contact from './components/contact';

import { Switch, Route } from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(


<Router>

<Switch>
<Route exact path='/' component={LandingPage} />
<Route exact path='/index' component={Home} />
<Route exact path ='/about-elle' component={AllAboutElle} />
<Route exact path='/find-your-scenario' component={FindScenario} />
<Route exact path='/supplemental-benefits' component={SupplementalBenefits} />
<Route exact path='/spousal-death' component={SpousalDeath} />
<Route exact path='/life-insurance-for-new-parents' component={NewLifeInsurance} />
<Route exact path='/life-insurance-for-parents-with-a-2nd-child' component={SecondLifeInsurance} />
<Route exact path='/retirement-plan-for-divorced-parents' component={DivorcedParents} />
<Route exact path='/taking-care-of-aging-parents-and-self' component={AgingParents} />
<Route exact path='/lack-of-automobile-coverage-after-accident' component={AutoCoverage} />
<Route exact path='/lack-of-health-insurance' component={HealthInsurance} />
<Route exact path='/renters-insurance' component={RentersInsurance} />
<Route exact path='/contact' component={Contact} />
</Switch>

</Router>


, document.getElementById('root'));
registerServiceWorker();
