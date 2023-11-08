import styles from './Cancel2Container.module.scss';
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import IcBed from '../../components/icons/cancelbooking-icons/IcBed';

const invoice = [
  {
    id: 1,
    name_hotel: 'Taian Hotel & Apartment',
    image_hotel_path: '',
    date_start: '15/12/2023',
    date_end: '16/12/2023',
    count_room: 1,
    amount: 1000000,
    cancel_charge: 0
  }
]
const detail_room = [
  {
    id: 1,
    room_name: 'Superior With King Size Bed',
    count: 2,
    amount: 635878,
    people: 2,
  },
  {
    id: 2,
    room_name: 'Superior Room With King Size Bed',
    count: 1,
    amount: 635878,
    people: 2,
  }
]
const Cancel2Container = () => {
  const [selectedReason, setSelectedReason] = useState(); // Use useState inside the functional component

  const handleSelectChange = (value) => {
    setSelectedReason(value);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSelectedReason(value);
  };

  const handleContinue = () => {
    
  };
  return (
    <div className={styles['content']}>
    {invoice.map((item, index) => (
      <Row>
        <Col flex="1 1 500px">
          <Link to="/cancel/1" className='flex text-green-600 font-semibold'>
            <LeftOutlined />
            <h2 className='ml-2'>Quay lại trước đó</h2>
          </Link>
          <h1 className='text-2xl font-bold pt-2 pb-2'>Xác nhận hủy</h1>
          <h3>Bạn sắp hủy toàn bộ đặt phòng của mình. Vui lòng xem lại thông tin bên dưới trước khi hủy.</h3>
          <div className='mt-6 flex '>
            <IcBed/>
            <div>
              {detail_room.map((room, index) => (
                <div className='ml-2 mb-3'>
                  <h3 className='font-bold'>({room.count}x) {room.room_name}</h3>
                  <div className='flex'>
                    <h3 className='mr-2'>{room.amount} VND</h3>
                    <h3>- {room.people} người lớn</h3>
                  </div>
                </div>
              ))}
              {item.cancel_charge ? (
                <h2 className='mb-3 ml-2 text-red-600 font-semibold'>Hủy mất phí</h2>
              ):(
                <h2 className='mb-3 ml-2 text-green-600 font-semibold'>Hủy miễn phí</h2>
              )
              }
            </div>
          </div>
            <div className='border-t border-b pt-5 pb-5'>
              <h1 className='text-2xl font-bold mb-4'>Chi tiết giá</h1>
              <Row className='ml-10 text-lg mb-3'>
                <Col flex={2} className='text-lg mb-3'>
                  <h3 className=' mb-3'>Đặt phòng của bạn</h3>
                  <h3 className=' mb-3'>Phí hủy</h3>
                  <h3 className='font-bold mb-3'>Số tiền bạn sẽ trả</h3>
                </Col>
                <Col flex={3} className='text-right text-lg mb-3 mr-14'>
                  <h3 className=' mb-3'>{item.amount} VND</h3>
                  <h3 className=' mb-3'>{item.cancel_charge} VND</h3>
                  <h3 className='font-bold mb-3'>{item.cancel_charge} VND</h3>
                </Col>
              </Row>
            </div>
          {item.cancel_charge ? (
                <h2 className='mt-3 mb-3 ml-10 text-red-600 font-semibold text-base'>Tiền hoàn lại là {item.amount - item.cancel_charge} VND</h2>
              ):(
                <h2 className='mt-3 mb-3 ml-10 text-green-600 font-semibold text-base'>Số tiền {item.amount - item.cancel_charge} VND sẽ được hoàn vào tài khoản của bạn.</h2>
              )
              }
          <div className="flex gap-2 mt-6 text-lg">
            <button
              className="flex justify-center rounded bg-red-600 border py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark"
              type="button"
              // onClick={''}
            >
              {item.cancel_charge ? (
                <Link to={'/cancel/4'}> Xác nhận hủy</Link> // có phí
              ):(
                <Link to={'/cancel/3'}> Xác nhận hủy</Link> // miễn phí
              )
              }
            </button>
            <button
              className="flex justify-center rounded bg-sky-100 border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark"
              type="button"
              // onClick={''}
            >
              Tôi muốn giữ đặt phòng này
            </button>
          </div>
        </Col>
        <Col flex="1 1 200px" style={{ marginLeft: '50px' }}>
          <Box className='border mb-6'>
              <div className='flex m-3'>
                <img src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg" alt="" className={`${styles.image}`}/>
                <div className='ml-3'>
                  <h1 className='text-2xl font-bold'>{item.name_hotel}</h1>
                  <span className='mt-2 text-lg'>
                  {item.date_start} - {item.date_end}
                  </span>
                  <h1 className='text-lg'>{item.count_room} phòng</h1>
                </div>
              </div>
              <Row className='m-4 text-xl border-t'>
                <Col flex={2}>
                  <h2 className='text-lg mb-4 mt-2'>Đặt phòng của bạn</h2>
                  <h2 className='text-lg mb-4'>Phí hủy</h2>
                  <h2 className='text-lg font-bold'>Số tiền bạn sẽ trả</h2>
                </Col>
                  <Col flex={3} className='text-right'>
                  <h2 className='text-lg mb-4 mt-2'>{item.amount} VND</h2>
                  <h2 className='text-lg mb-4'>{item.cancel_charge} VND</h2>
                  <h2 className='text-lg font-bold '>{item.will_pay} VND</h2>
                </Col>
              </Row>
          </Box>
          <Box className='border p-3'>
            <h1 className='text-xl font-bold'>Chính sách hủy</h1>
            <h1 className='text-base mt-2'>Bạn có thể hủy miễn phí đến 1 ngày trước khi tới nhận phòng. Bạn sẽ phải trả toàn bộ tiền phòng nếu bạn hủy trong vòng 1 ngày trước khi tới nhận phòng. Nếu bạn vắng mặt, phí vắng mặt sẽ bằng với phí hủy.</h1>
          </Box>
        </Col>
      </Row>
    ))}
    </div>
  );
}

export default Cancel2Container;