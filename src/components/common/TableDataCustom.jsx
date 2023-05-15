import { Table } from "antd";
import { useEffect, useRef, useState } from "react";
import qs from "qs";
import { useStateContext } from "../../contexts/ContextProvider";

const TableDataCustom = (props) => {
  const { columns, defaultPageSize } = props;
  const { screenSize } = useStateContext();

  const _isMounted = useRef(false);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: defaultPageSize,
      total: 200,
    },
  });
  const [data, setData] = useState();

  const getRandomuserParams = (params) => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
  });

  const fetchData = async () => {
    _isMounted.current && setLoading(true);
    const res = await fetch(
      `https://randomuser.me/api?${qs.stringify(
        getRandomuserParams(tableParams)
      )}`
    );
    const data = await res.json();
    if (_isMounted.current) {
      setData(data.results);
      setLoading(false);
    }
  };

  useEffect(() => {
    _isMounted.current = true;
    return () => {
      _isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleTableChange = (pagination) => {
    _isMounted.current &&
      setTableParams({
        pagination,
      });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  const paginationOption = {
    ...tableParams.pagination,
    pageSizeOptions: [20, 50, 100],
  };

  return (
    <Table
      rowKey={(record) => record.login.uuid}
      columns={columns}
      dataSource={data}
      pagination={paginationOption}
      loading={loading}
      onChange={handleTableChange}
      bordered
      rowSelection={rowSelection}
      style={{ zIndex: 100 }}
      scroll={{ x: 696 }}
      size={screenSize < 500 ? "small" : "default"}
      responsive={screenSize < 500}
    />
  );
};

export default TableDataCustom;
