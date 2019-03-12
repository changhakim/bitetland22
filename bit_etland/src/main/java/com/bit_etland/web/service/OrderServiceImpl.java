package com.bit_etland.web.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bit_etland.web.domain.OrderDetailDTO;

@Service
public class OrderServiceImpl implements OrderDetailService{

	@Override
	public void registOrderDetail(OrderDetailDTO orderDetail) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<OrderDetailDTO> bringOrderDetailList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<OrderDetailDTO> retrieveOrderDetails(String searchWord) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public OrderDetailDTO retrieveOrderDetail(String searchWord) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countOrderDetails() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean existOrderDetails(String searchWord) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void modifyOrderDetail(OrderDetailDTO orderDetail) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeOrderDetail(OrderDetailDTO orderDetail) {
		// TODO Auto-generated method stub
		
	}

}
