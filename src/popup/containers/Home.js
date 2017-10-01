import React from 'react';
import { connect } from 'react-redux';
import PackList from '@popup/components/Pack/PackList';
import Header from '@popup/components/Header';

const Home = ({
    isEdit,
    dispatch
}) => {
	if(isEdit.newPackage || isEdit.packageid !== null){
		return null;
	}else
		return (
				<div>
          <Header dispatch={dispatch}/>
					<PackList/>
				</div>
		);
};

const mapStateToProps = (
  state
) => {
  return {
    isEdit: state.flags.isEditPackage
  };
};

export default connect(mapStateToProps)(Home);
