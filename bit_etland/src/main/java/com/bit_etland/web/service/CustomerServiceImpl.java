package com.bit_etland.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bit_etland.web.domain.CustomerDTO;
import com.bit_etland.web.mapper.CustomerMapper;
import com.bit_etland.web.proxy.Proxy;

@Service
public class CustomerServiceImpl implements CustomerService {
	@Autowired CustomerMapper customerMapper;
	@Override
	public void registCustomer(CustomerDTO customer) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<CustomerDTO> bringCustomerList(Proxy pxy) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CustomerDTO> retrieveCustomers(Proxy pxy) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CustomerDTO retrieveCustomer(CustomerDTO cus) {
		
		return customerMapper.selectCustomer(cus);
	}

	@Override
	public String countCustomers(Proxy pxy) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean existCustomerID(CustomerDTO cus) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void modifyCustomer(CustomerDTO customer) {
		customerMapper.updateCustomer(customer);
		
	}

	@Override
	public Map<String, Object> fileUpload(Proxy pxy) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void removeCustomer(CustomerDTO customer) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Map<String, Object> retrievePhone(Proxy pxy) {
		// TODO Auto-generated method stub
		return null;
	}

}
