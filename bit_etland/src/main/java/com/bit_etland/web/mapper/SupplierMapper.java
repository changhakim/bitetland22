package com.bit_etland.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.domain.SupplierDTO;

@Repository
public interface SupplierMapper {
	public void insertSupplier(SupplierDTO supplier);
	public List<SupplierDTO> selectSupplierlist();
	public List<SupplierDTO> selectSuppliers(String searchWord);
	public SupplierDTO selectSupplier(String searchWord);
	public int countSuppliers();
	public boolean existSupplier(String searchWord);
	public void updateSupplier(SupplierDTO supplier);
	public void deleteSupplier(SupplierDTO supplier);
}
