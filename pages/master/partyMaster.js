import React, { useEffect, useState } from 'react'
import partyMaster_Style from '../../styles/partyMaster.module.css'

let party_data = [];

function partyMaster() {

     const [btn_disable, setBtn_disable] = useState(false)
     const [show_list, setShow_list] = useState(false)
     const [data, setData] = useState({
          party_type: "",
          party_name: "",
          party_phone: "",
     })
     const all_data_change = (e) => {
          setData({ ...data, [e.target.name]: e.target.value })
     }
     const add_party = () => {
          setData({ ...data, id: data.id + 1 })
          setBtn_disable(true)
     }
     const save_party = () => {
          ok.selectedIndex = ""
          party_data.push(data)
          setData({ ...data, party_name: "", party_phone: "", party_type: "" })
          localStorage.setItem("all_party_data", JSON.stringify(party_data))
          setBtn_disable(false)
          // console.log(party_data);
     }
     const show_all_list = () => {
          party_data = JSON.parse(localStorage.getItem("all_party_data")) || []
          setShow_list(true)
     }
     return (
          <div className={ `${partyMaster_Style.partyMaster_Style_main_box}` }>
               { show_list ? null :
                    <div className={ `card ${partyMaster_Style.partyMaster_Style_box}` }>
                         { btn_disable ? null : <div className={ `${partyMaster_Style.party_disable}` }></div> }

                         <div className={ `${partyMaster_Style.partyMaster_Style_data}` }>
                              <h2>Add Party</h2>
                              <hr />
                              <div className={ `${partyMaster_Style.partyMaster_Style_select}` }>
                                   <label htmlFor="">Select</label>
                                   <select name="party_type" id='ok' onChange={ all_data_change }>
                                        <option value="">Select party</option>
                                        <option value="buyer">Buyer</option>
                                        <option value="seller">Seller</option>
                                        <option value="extra_party">Extra Party</option>
                                   </select>
                              </div>
                              <div className={ `${partyMaster_Style.partyMaster_Style_name}` }>
                                   <label htmlFor="">Name</label>
                                   <input value={ data.party_name } type="text" placeholder='Enter a party name' name='party_name' onChange={ all_data_change } />
                              </div>
                              <div className={ `${partyMaster_Style.partyMaster_Style_phone}` }>
                                   <label htmlFor="">Phone</label>
                                   <input value={ data.party_phone } type="number" placeholder='Enter a party phone number' name='party_phone' onChange={ all_data_change } />
                              </div>
                              <div className={ `${partyMaster_Style.partyMaster_Style_button}` }>
                                   <button
                                        className={ btn_disable ? `${partyMaster_Style.partyMaster_disable}` : null }
                                        disabled={ btn_disable ? "disabled" : null }
                                        style={ btn_disable ? { cursor: "no-drop" } : null }
                                        onClick={ add_party }>Add Party</button>
                                   <button
                                        className={ btn_disable ? null : `${partyMaster_Style.partyMaster_disable}` }
                                        disabled={ btn_disable ? null : "disabled" }
                                        style={ btn_disable ? null : { cursor: "no-drop" } }
                                        onClick={ save_party }>Save</button>
                                   <button
                                        onClick={ show_all_list }
                                   >All List</button>
                              </div>
                         </div>
                    </div>
               }
               { show_list ?
                    <div className={ `card ${partyMaster_Style.party_table}` }>
                         <h2>All party list</h2>
                         <table>
                              <thead>
                                   <tr>
                                        <th>No</th>
                                        <th>Type</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {
                                        party_data.map((element, index) => {
                                             return (
                                                  <tr key={ index }>
                                                       <td>{ index + 1 }</td>
                                                       <td>{ element.party_type }</td>
                                                       <td>{ element.party_name }</td>
                                                       <td>{ element.party_phone }</td>
                                                  </tr>
                                             )
                                        })
                                   }
                              </tbody>
                         </table>
                         <div className={ `${partyMaster_Style.partyMaster_Style_button}` }>
                              <button onClick={ () => setShow_list(false) }>Back</button>
                         </div>
                    </div>
                    : null }
          </div>
     )
}

export default partyMaster
