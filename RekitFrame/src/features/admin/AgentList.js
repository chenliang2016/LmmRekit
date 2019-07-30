import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, Avatar } from 'antd'
// import { DropOption } from 'components'

const { confirm } = Modal

class AgentList extends PureComponent {
  handleMenuClick = (record, e) => {
    const { onDeleteItem, onEditItem, i18n } = this.props

    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: i18n.t`Are you sure delete this record?`,
        onOk() {
          onDeleteItem(record.id)
        },
      })
    }
  }

  render() {
    const { onDeleteItem, onEditItem,  ...tableProps } = this.props

    const columns = [
      {
        title: "Avatar",
        dataIndex: 'avatar',
        key: 'avatar',
        width: 72,
        fixed: 'left',
        render: text => <Avatar style={{ marginLeft: 8 }} src={text} />,
      },
      // {
      //   title: Name,
      //   dataIndex: 'name',
      //   key: 'name',
      //   render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
      // },
      // {
      //   title: <Trans>NickName</Trans>,
      //   dataIndex: 'nickName',
      //   key: 'nickName',
      // },
      // {
      //   title: <Trans>Age</Trans>,
      //   dataIndex: 'age',
      //   key: 'age',
      // },
      // {
      //   title: <Trans>Gender</Trans>,
      //   dataIndex: 'isMale',
      //   key: 'isMale',
      //   render: text => <span>{text ? 'Male' : 'Female'}</span>,
      // },
      // {
      //   title: <Trans>Phone</Trans>,
      //   dataIndex: 'phone',
      //   key: 'phone',
      // },
      // {
      //   title: <Trans>Email</Trans>,
      //   dataIndex: 'email',
      //   key: 'email',
      // },
      // {
      //   title: <Trans>Address</Trans>,
      //   dataIndex: 'address',
      //   key: 'address',
      // },
      // {
      //   title: <Trans>CreateTime</Trans>,
      //   dataIndex: 'createTime',
      //   key: 'createTime',
      // },
      // {
      //   title: <Trans>Operation</Trans>,
      //   key: 'operation',
      //   fixed: 'right',
      //   render: (text, record) => {
      //     return (
      //       <DropOption
      //         onMenuClick={e => this.handleMenuClick(record, e)}
      //         menuOptions={[
      //           { key: '1', name: `Update` },
      //           { key: '2', name: `Delete` },
      //         ]}
      //       />
      //     )
      //   },
      // },
    ]

    return (
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
          showTotal: total => `Total ${total} Items`,
        }}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        simple
        rowKey={record => record.id}
      />
    )
  }
}

AgentList.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  location: PropTypes.object,
}

export default AgentList