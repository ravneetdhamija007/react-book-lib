import React from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner'
import { ToastContainer, toast } from "react-toastify";

function AddEditBookView(props){
  
    return(
    <div className="main protected">
        <div id="content">
          <div className="container-fluid content setting-wrapper">
            <div className="setting-setion">
              <form id="edit-user-form" name="login-form" className="nobottommargin" action="#" method="post" onSubmit={props.handleSubmit}>
                <div className="setting-container">
                  <div className="setting-title">
                    {props.data.bookId ? "Edit Book" : "Add Book"}
                    <Link to="/books" className="pull-right crossIcon cancelAction">{"x"}</Link>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 profile-detail-left">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="setting-field-outer">
                            <div className="new-field-label">{"Book Category"} <span className="setting-require">*</span></div>
                            <div className="setting-input-outer">
                              <select name="booksCategory"  onChange={props.handleInputChange} value={props.data.booksCategory}>` `
                                <option value>Select</option>
                                <option value='1'>{"Autobiography"}</option>
                                <option value='2'>{"Acadmeics"}</option>
                                <option value='3'>{"Information Technology"}</option>
                                <option value='4'>{"Others"}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="setting-field-outer">
                            <div className="new-field-label">{"Book Name"} <span className="setting-require">*</span></div>
                            <div className="setting-input-outer">
                              <input name="bookName" id="bookName1" className="setting-input-box" maxLength={500} type="text" value={(props.data.bookName !== null) ? props.data.bookName : ""} onChange={props.handleInputChange} autoComplete="off" /></div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="setting-field-outer">
                            <div className="new-field-label">{"Book Description"} <span className="setting-require">*</span></div>
                            <div className="setting-input-outer">
                              <textarea name="bookDescription" id="bookDescription1" className="setting-textarea-box" maxLength={500} type="text" value={(props.data.bookDescription !== null) ? props.data.bookDescription : ""} onChange={props.handleInputChange} autoComplete="off" /></div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="setting-field-outer">
                            <div className="new-field-label">{"Author"} <span className="setting-require">*</span></div>
                            <div className="setting-input-outer">
                              <input name="author" id="author1" className="setting-input-box" type="text" value={(props.data.author) ? props.data.author : ""} onChange={props.handleInputChange} autoComplete="off" /></div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="setting-field-outer">
                            <div className="new-field-label">{"Price $ "}<span className="setting-require">*</span></div>
                            <div className="setting-input-outer">
                              <input name="price" id="price"  maxLength={255} className="setting-input-box" type="text" value={props.data.price} onChange={props.handleInputChange} autoComplete="off" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="setting-field-outer">
                            <div className="new-field-label">{"Count"}<span className="setting-require">*</span></div>
                            <div className="setting-input-outer">
                              <input name="count" id="count"  maxLength={255} className="setting-input-box" type="text" value={props.data.count} onChange={props.handleInputChange} autoComplete="off" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-static">
                  <input className="new-blue-btn pull-right" id="editsave" type="submit" value="Save" />
        
                  {(props.data.isShowDeleteButton) &&
                    <button type="button" className={props.data.bookId ? "new-red-btn pull-right" : "no-display"} id="resetform" onClick={props.bookDelete.bind(this, props.data.bookId)}>Delete</button>
                  }
         
                </div>
              </form>
              <div className={props.showLoader ? 'new-loader text-left displayBlock' : 'new-loader text-left'}>
                <div className="loader-outer">
                    <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
                    <div id="modal-confirm-text" className="popup-subtitle" >{"Please Wait..."}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default AddEditBookView