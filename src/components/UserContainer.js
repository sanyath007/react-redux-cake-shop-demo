import React, { useEffect } from 'react';
import { fetchUsers } from '../redux'
import { connect } from 'react-redux';

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, [])

  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User Lists</h2>
      <div>
        {
          userData && userData.users && userData.users.map(user => <p key={user.id}>{user.name}</p>)
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  userData: state.user
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);