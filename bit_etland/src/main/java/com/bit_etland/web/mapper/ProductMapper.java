package com.bit_etland.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.domain.ProductDTO;
import com.bit_etland.web.proxy.Proxy;

@Repository
public interface ProductMapper {

	public void createProduct(ProductDTO pro);
	public List<ProductDTO> selectProductList(Proxy pxy);
	public List<ProductDTO> selectProducts(ProductDTO pro);
	public ProductDTO selectProduct(ProductDTO pro);
	public int countProducts(Proxy pxy);
	public boolean existsProduct(ProductDTO pro);
	
	public void updateProduct(ProductDTO pro);
	public void deleteProduct(ProductDTO pro);
}
