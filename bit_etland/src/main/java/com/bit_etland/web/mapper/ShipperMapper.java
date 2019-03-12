package com.bit_etland.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.domain.ShipperDTO;

@Repository
public interface ShipperMapper {
	
	public void registShipper(ShipperDTO shipper);
	
	public List<ShipperDTO> bringShipperList();
	public List<ShipperDTO> retrieveShippers(String searchWord);
	public ShipperDTO retrieveShipper(String searchWord);
	public int countShippers();
	public String existShipper(String searchWord);
	
	public void modifyShipper(ShipperDTO shipper);
	public void removeShipper(ShipperDTO shipper);
}
