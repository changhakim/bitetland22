package com.bit_etland.web.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bit_etland.web.domain.CategoryDTO;
import com.bit_etland.web.proxy.Proxy;

@Service
public class CategoryServiceImpl implements CategoryService {

	@Override
	public void registCategory(CategoryDTO cate) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<CategoryDTO> bringCategoryList(Proxy pxy) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countCategories(Proxy pxy) {
		// TODO Auto-generated method stub
		return 0;
	}

}
