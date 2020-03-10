import React from 'react'
import Loader from 'react-loader-spinner'


function ListView(props)

{
    
return (
<div id="content">
    <div className="container-fluid content setting-wrapper">
        <div className="setting-setion">
            <div className="setting-search-outer">
                {<form onSubmit={props.handleSubmit}>
                  <div className="search-bg col-xs-5">
                    
                        <input className="setting-search-input search-key"  name="term" placeholder={"Search Book"} value={props.data.term} autoComplete="off" onChange={props.handleInputChange} />
                  </div>
                </form>}
              <a  onClick={props.bookAdd} className="new-blue-btn pull-right edit_setting" >{"Add Book"}</a>
            </div>
                <div className="table-responsive">
                    <table className="table-updated setting-table">
                         <thead className="table-updated-thead">
                            <tr>
                                <th className="col-xs-3 table-updated-th">{"Book Name"}<i className="gray-gray" /></th>
                                <th className="col-xs-3 table-updated-th">{"Book Description"}<i className="gray-gray" /></th>
                                <th className="col-xs-3 table-updated-th" >{"Author"}</th>
                                <th className="col-xs-3 table-updated-th" >{"Price"}</th>
                            </tr>
                         </thead>
                        <tbody className="ajax_body" >
                        {
                        props.data.booksList !== undefined && props.data.booksList.map((obj, idx) => {
                            
                        return (
                        <tr className="table-updated-tr edit_setting" key={idx} data-title="Edit Book" onClick={props.bookEdit.bind(this, obj._id)} >
                            <td className="col-xs-3 table-updated-td" data-id={obj.id} >{obj.title}</td>
                            <td className="col-xs-3 table-updated-td" data-id={obj.id} >{obj.description}</td>
                            <td className="col-xs-3 table-updated-td" data-id={obj.id} >{obj.author}</td>
                            <td className="col-xs-3 table-updated-td" data-id={obj.id} >{obj.price}</td>
                        </tr>)
                        })
                        }
                        </tbody>
                    </table>
                    <div className={(props.data.booksList.length) ? "no-record no-display" : "no-record m-t-25"}>
                    {"Sorry, No Record Found"}
                    </div>
                </div>
            </div>
            <div className={(props.showLoader) ? 'new-loader text-left displayBlock' : 'new-loader text-left'}>
                <div className="loader-outer">
                    <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
                    <div id="modal-confirm-text" className="popup-subtitle" >{"Please Wait..."}</div>
                </div>
            </div>
        </div>
    </div>
        )
    }

export default ListView