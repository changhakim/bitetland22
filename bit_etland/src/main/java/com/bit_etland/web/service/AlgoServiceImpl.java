package com.bit_etland.web.service;

import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public class AlgoServiceImpl implements AlgoService {

	@Override
	public String arithmeticSequence(Map<?, ?> param) {
		String startNum = (String) param.get("startNum"),
			   endNum = (String) param.get("endNum"),
			   diff = (String) param.get("diff"),
			   result="";
		int a = Integer.parseInt(startNum);//시작
		int e = Integer.parseInt(endNum);//마지막번째항
		int d = Integer.parseInt(diff);//공차
		int s = a;
		int n = 2;
		int an = 0;
		while(true){
			an = a+(n-1)*d;
			s = s+ an;
			n= n+1;
			if(n>e)break;
		}
		result = String.valueOf(s);
		return result;
	}
}
