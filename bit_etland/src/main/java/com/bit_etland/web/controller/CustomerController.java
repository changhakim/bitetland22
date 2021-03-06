package com.bit_etland.web.controller;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.bit_etland.web.domain.CustomerDTO;
import com.bit_etland.web.proxy.ContextProxy;
import com.bit_etland.web.service.CustomerService;

@SessionAttributes("user")
@Controller
@RequestMapping("/customer")
public class CustomerController {
	static final Logger logger = LoggerFactory.getLogger(CustomerController.class);
	@Autowired CustomerDTO customer;
	@Autowired CustomerService customerService;
	
	@RequestMapping(value="/signin", method=RequestMethod.POST)
	public String signin(@ModelAttribute CustomerDTO param,
			Model session) {
		logger.info("\n --------- MemberController {} !! ----------","signin");
		customer = customerService.retrieveCustomer(param);
		if(customer != null)
			session.addAttribute("user", customer);
		return (customer != null) ?
				"customer:customer/content.tiles"
					:				 
				"public:home/main.tiles";
	}
	@RequestMapping(value="/detail")
	public String detail(@RequestParam("customerID")String customerID,
			Model model) {
		logger.info("\n --------- MemberController {} !! ----------","detail");
		System.out.println("조회 파라미터 "+customerID);
		customer.setCustomerID(customerID);
		customer = customerService.retrieveCustomer(customer);
		model.addAttribute("customer", customer);
		return "customer:customer/content.tiles";
	}
	@RequestMapping(value="/update", method=RequestMethod.POST)
	public String update(@ModelAttribute CustomerDTO param,
			Model session,
			RedirectAttributes red) {
		logger.info("\n --------- MemberController {} !! ----------","update");
		customerService.modifyCustomer(param);
		System.out.println("모디파이후customer"+customer.toString());
		customer = customerService.retrieveCustomer(param);
		System.out.println("리트리브후customer"+customer.toString());
		session.addAttribute("user", customer);
		red.addAttribute("customerID", param.getCustomerID());
		return "redirect:/customer/detail";
	}

}