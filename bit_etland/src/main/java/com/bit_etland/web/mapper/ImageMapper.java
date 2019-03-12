package com.bit_etland.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.domain.ImageDTO;
import com.bit_etland.web.proxy.Proxy;

@Repository
public interface ImageMapper {

	public void insertImage(ImageDTO img);
	public List<ImageDTO> selectimageList(Proxy pxy);
	public List<ImageDTO> selectImage(Proxy pxy);
	public ImageDTO lastImageSeq();
	public ImageDTO selectImage(ImageDTO img);
}
