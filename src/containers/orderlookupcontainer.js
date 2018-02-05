import React ,{Component} from 'react';
import {connect} from 'react-redux';

class OrderLookupContainer extends Component{

    render(){            
        return (
            <div>
                OrderLookupContainer:
                <br />
                <label>
          Partners:
          <select>
            <option value="pfc">Proflowers</option>
            <option value="ftd">FTD</option>
            <option value="fol">FOL</option>
            <option value="SSS">Berries</option>
          </select>
        </label>
        <br />
                <label>
                OrderNumer:
                <input type="text" name="ordernumber" />
              </label>
              <br />
              <label>
                PhoneNumer:
                <input type="text" name="phonenumber" />
              </label>
              <br />
            </div>
        );
    }
}


export default OrderLookupContainer;