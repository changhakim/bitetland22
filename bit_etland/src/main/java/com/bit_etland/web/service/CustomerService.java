package com.bit_etland.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.bit_etland.web.domain.CustomerDTO;
import com.bit_etland.web.proxy.Proxy;

@Component
public interface CustomerService {

	
	public void registCustomer(CustomerDTO customer);
	
	public List<CustomerDTO> bringCustomerList(Proxy pxy);
	public List<CustomerDTO> retrieveCustomers(Proxy pxy);
	public CustomerDTO retrieveCustomer(CustomerDTO cus);
	public String countCustomers(Proxy pxy);
	public boolean existCustomerID(CustomerDTO cus);
	
	
	public void modifyCustomer(CustomerDTO customer);
	public Map<String, Object> fileUpload(Proxy pxy);
	public void removeCustomer(CustomerDTO customer);
	public Map<String, Object> retrievePhone(Proxy pxy);
}
