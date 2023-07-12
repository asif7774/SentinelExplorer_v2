import React, {useEffect, useState, useRef} from 'react';
import ListView from '../common/ListView/ListView';
import {useSelector, useDispatch} from 'react-redux';
import {setActiveNode} from '../../store/actions/mapActions';
import {useParams} from 'react-router';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
const { Column } = Table;

const AllNodesDataDetails = () => {
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  // const [dataFilterBY, setDataFilterBY] = useState('');
  const dispatch = useDispatch();
  const storeState = useSelector((state) => state);
  const {city} = useParams();
  useEffect(() => {
    const initFn = () => {
      let mainData;
      if (storeState.isDataInitialized) {
        mainData = storeState.metadata;
        if (city) {
          mainData = storeState.metadata.filter((el) => {
            return el.location.city === city;
          });
        }
        setData(mainData);
        
        setData((data) =>
          data.sort((a, b) => {
            if (a.location['city'] < b.location['city']) {
              return -1;
            }
            if (a.location['city'] > b.location['city']) {
              return 1;
            }
            return 0;
          })
          
        );
        // setDataFilterBY('country');
        
        setLoading(false);
      }
    };
    initFn();
  }, [storeState]);
  
const columns = [
  {
    title:"Sr. No.",
    key:"index",
    width:80,
    render:(value, item, index) => <span> {(page - 1) * 10 + index+1}</span>
  },
  {
    title: 'Moniker',
    dataIndex: 'moniker',
    key: 'moniker',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    ellipsis: true,
  },
  {
    title: 'City',
    dataIndex: 'location',
    key: 'location1',
    render: (text) => <span>{text.city}</span>,
  },
  {
    title: 'Country',
    dataIndex: 'location',
    key: 'location2',
    sorter: (a, b) => {
      if (a.location.country.toLowerCase() > b.location.country.toLowerCase()) {
        return -1;
      } else if (a.location.country.toLowerCase() < b.location.country.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    },
    filters: [
      {
        text: 'United States',
        value: 'United States',
      },
      {
        text: 'Category 1',
        value: 'Category 1',
      },
      {
        text: 'Category 2',
        value: 'Category 2',
      },
    ],
    filterMode: 'menu',
    filterSearch: true,
    onFilter: (value, record) => record.location.country.startsWith(value),
    render: (text) => <span>{text.country}</span>,
  },
  {
    title: 'Latitude/Longitude',
    dataIndex: 'location',
    key: 'location3',
    render: (text) => <span>{text.latitude}, {text.longitude}</span>,
    fixed: 'right',
  },

  
  
];
  return (
    <div className="AllNodeDataDetails">
        {!loading && (
          <>
            <Table dataSource={data} columns={columns} pagination={false} scroll={{ y: 'calc(100vh - 55px)' }}>
            </Table>;
          </>
        )}
    </div>
  );
};

export default AllNodesDataDetails;
