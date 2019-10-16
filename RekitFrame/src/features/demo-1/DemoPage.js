import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import { Page } from '../../components'

import DemoList from './DemoList'

export class DemoPage extends Component {
  static propTypes = {
    demo1: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

    componentDidMount(){
     const { demo1 } = this.props
     const { page } = demo1
     this.fetchList(page);
  }

  fetchList = (page,name) => {
    const {getList} = this.props.actions;
    getList(page,name);
  }

   getDataSource() {
    const { demo1 } = this.props;
    const { byId, list } = demo1;
    if (!list) return [];
    return list.map(id => byId[id]);
  }

  get listProps() {
    const { demo1,actions } = this.props
    const { getListPending,total,page } = demo1
    const { deleteShop,chooseCurrentShop,shopModalChange } = actions;

    return {
      dataSource: this.getDataSource(),
      loading: getListPending,
      pagination:{
        total:total,
        current:page,
        onChange : (page) => {
          this.fetchList(page)
        }
      },
      onDeleteItem: id => {
        deleteShop(id).then((data) => {
          this.fetchList();
        })
      },
      onEditItem(item) {
         chooseCurrentShop(item);
         shopModalChange(true,"updata");
      },
    }
  }  

  render() {
    return (
      <Page inner>
        <DemoList {...this.listProps} />
      </Page>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    demo1: state.demo1,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoPage);
