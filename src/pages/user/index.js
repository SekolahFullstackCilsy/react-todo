import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import useRouter from 'use-react-router';
import {Row, Card, Button} from 'react-bootstrap'
import { getUsers, getUserById, saveUser } from '../../store/actions/user'

const List = (props) => {
  const [isDetail, setIsDetail] = useState(false);
  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    street: '',
    companyName: '',
  });
  useEffect(() => {
    props.getUsers()
  }, []);
  
  const getDetail = (id) => {
    setIsDetail(true)
    props.getUserById(id)
  }

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    props.saveUser(form)
    alert('Success')
  }

  return (
    <div>
      List User Page
      <div>
        <Row>
          {props.users.map((val, key) => {
            return (
              <Card style={{ width: '18rem' }} key={key}>
                <Card.Body>
                  <Card.Title>{val.name}</Card.Title>
                  <Card.Text>
                    {val.address.street}
                  </Card.Text>
                  <Button variant="primary" onClick={() => getDetail(val.id)}>Detail</Button>
                </Card.Body>
              </Card>
            )
          })}
        </Row>
        <Row>
          {isDetail && (
            <div>
              Ini Detail
              <h1>{props.user.name}</h1>
              <p>{props.user.address && props.user.address.street}</p>
            </div>
          )}
        </Row>
        <Row>
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <div>
              <label htmlFor="">Name</label>
              <input type="text" name="name" value={form.name} onChange={(e) => handleFormChange(e)} /> 
            </div>
            <div>
              <label htmlFor="">Username</label>
              <input type="text" name="username" value={form.username} onChange={(e) => handleFormChange(e)} /> 
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" name="email" value={form.email} onChange={(e) => handleFormChange(e)} /> 
            </div>
            <div>
              <label htmlFor="">Street</label>
              <input type="text" name="street" value={form.street} onChange={(e) => handleFormChange(e)} /> 
            </div>
            <div>
              <label htmlFor="">Company Name</label>
              <input type="text" name="companyName" value={form.companyName} onChange={(e) => handleFormChange(e)} /> 
            </div>
            <div>
              <button type="submit">Tambah User</button>
            </div>
          </form>
        </Row>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
    user: state.userReducer.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
    getUserById: (id) => dispatch(getUserById(id)),
    saveUser: (data) => dispatch(saveUser(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);